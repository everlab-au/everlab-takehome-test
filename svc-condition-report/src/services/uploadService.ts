import HL7 from 'hl7-standard'
import fs from 'fs'
import client from '../database'
import { ObxSegment } from '../types/obxSegments'
import {
  OBSERVATION_DATE,
  OBSERVATION_IDENTIFIER,
  OBSERVATION_RESULT_STATUS,
  OBSERVATION_UNITS,
  OBSERVATION_VALUE
} from '../types/observationResult'
import { PATIENT_DOB } from '../types/patientIdentifer'
import { calculateAge, formatDate, parseObservationResult } from '../utils'
import { Condition, ReportConditions } from '../types/reportConditions'

const getDiagnosticMetricsQuery =
  'SELECT * FROM diagnostic_metrics WHERE oru_sonic_codes = ANY($1) AND oru_sonic_units = ANY($2)'

const getDiagnosticGroupsQuery = 'SELECT * FROM diagnostics WHERE name = $1'

export async function findConditionsFromReport(
  file: Express.Multer.File
): Promise<ReportConditions> {
  const content = fs.readFileSync(file.path, 'utf8')
  const message = new HL7(content, { lineEndings: '\n' })
  message.transform((err: Error) => {
    if (err) {
      throw err
    }
  })
  const obxSegments: Array<ObxSegment> = message.getSegments('OBX')

  const patientIdentifiers = message.getSegment('PID')

  const patientDateOfBirth = patientIdentifiers.data[PATIENT_DOB]
  const patientAge = calculateAge(patientDateOfBirth)

  const matched_diagnostics: Array<Condition> = []

  const abnormal_diagnostics: Array<Condition> = []

  const abnormal_diagnostics_everlab: Array<Condition> = []

  for (const obxSegment of obxSegments) {
    try {
      const observationIdentifiers = Object.values(
        obxSegment.data[OBSERVATION_IDENTIFIER]
      )
      const observationResultStatus = obxSegment.data[OBSERVATION_RESULT_STATUS]

      const observationUnits = Object.values(obxSegment.data[OBSERVATION_UNITS])

      const observationValue = parseObservationResult(
        obxSegment.data[OBSERVATION_VALUE]
      )

      const observationDate = formatDate(obxSegment.data[OBSERVATION_DATE])

      if (observationValue === null) {
        continue
      }

      // if results aren't final then ignore
      if (observationResultStatus !== 'F') {
        continue
      }

      const result = await client.query(getDiagnosticMetricsQuery, [
        observationIdentifiers,
        observationUnits
      ])

      if (result.rows.length) {
        for (const row of result.rows) {
          if (
            (patientAge &&
              patientAge >= row.min_age &&
              patientAge <= row.max_age) ||
            (row.min_age === null && row.max_age === null)
          ) {
            const diagnosticGroupResult = await client.query(
              getDiagnosticGroupsQuery,
              [row.diagnostic]
            )
            const diagnosticGroup =
              diagnosticGroupResult.rows[0].diagnostic_groups
            const condition = {
              name: row.name,
              everlab_upper: row.everlab_higher,
              everlab_lower: row.everlab_lower,
              standard_upper: row.standard_higher,
              standard_lower: row.standard_lower,
              units: row.units,
              diagnostic: row.diagnostic,
              diagnosticGroup,
              observationDate: observationDate,
              observationValue
            }
            matched_diagnostics.push(condition)

            const everlabLowerLimit = row.everlab_lower
            const everlabUpperLimit = row.everlab_higher

            const standardLowerLimit = row.standard_lower
            const standardUpperLimit = row.standard_higher

            if (
              observationValue !== null &&
              (observationValue <= standardLowerLimit ||
                observationValue >= standardUpperLimit)
            ) {
              abnormal_diagnostics.push(condition)
            }

            if (
              observationValue !== null &&
              (observationValue <= everlabLowerLimit ||
                observationValue >= everlabUpperLimit)
            ) {
              abnormal_diagnostics_everlab.push(condition)
            }
          }
        }
      }
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  return {
    matched_diagnostics,
    abnormal_diagnostics,
    abnormal_diagnostics_everlab
  }
}
