export type ObservationResult = {
  'OBX.1': string // Set Id
  'OBX.2': string // Value Type
  'OBX.3': Record<string, string> // Observation Identifier
  'OBX.4': string // Observation Sub id
  'OBX.5': string // Observation Value
  'OBX.6': Record<string, string> // Units
  'OBX.7': string // References Range
  'OBX.8': string // Interpretation Codes
  'OBX.9': string // Probability
  'OBX.10': string // Nature Of Abnormal Test
  'OBX.11': string // Observation Result Status
  'OBX.12': string // Effective Date Of Reference Range
  'OBX.13': string // User Defined Access Checks
  'OBX.14': string // Date/Time Of The Observation
}

export const OBSERVATION_IDENTIFIER = 'OBX.3'

export const OBSERVATION_VALUE = 'OBX.5'

export const OBSERVATION_UNITS = 'OBX.6'

export const OBSERVATION_RESULT_STATUS = 'OBX.11'

export const OBSERVATION_DATE = 'OBX.14'
