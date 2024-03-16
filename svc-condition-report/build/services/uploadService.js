"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findConditionsFromReport = void 0;
const hl7_standard_1 = __importDefault(require("hl7-standard"));
const fs_1 = __importDefault(require("fs"));
const database_1 = __importDefault(require("../database"));
const observationResult_1 = require("../types/observationResult");
const patientIdentifer_1 = require("../types/patientIdentifer");
const utils_1 = require("../utils");
const getDiagnosticMetricsQuery = 'SELECT * FROM diagnostic_metrics WHERE oru_sonic_codes = ANY($1) AND oru_sonic_units = ANY($2)';
const getDiagnosticGroupsQuery = 'SELECT * FROM diagnostics WHERE name = $1';
async function findConditionsFromReport(file) {
    const content = fs_1.default.readFileSync(file.path, 'utf8');
    const message = new hl7_standard_1.default(content, { lineEndings: '\n' });
    message.transform((err) => {
        if (err) {
            throw err;
        }
    });
    const obxSegments = message.getSegments('OBX');
    const patientIdentifiers = message.getSegment('PID');
    const patientDateOfBirth = patientIdentifiers.data[patientIdentifer_1.PATIENT_DOB];
    const patientAge = (0, utils_1.calculateAge)(patientDateOfBirth);
    const matched_diagnostics = [];
    const abnormal_diagnostics = [];
    const abnormal_diagnostics_everlab = [];
    for (const obxSegment of obxSegments) {
        try {
            const observationIdentifiers = Object.values(obxSegment.data[observationResult_1.OBSERVATION_IDENTIFIER]);
            const observationResultStatus = obxSegment.data[observationResult_1.OBSERVATION_RESULT_STATUS];
            const observationUnits = Object.values(obxSegment.data[observationResult_1.OBSERVATION_UNITS]);
            const observationValue = (0, utils_1.parseObservationResult)(obxSegment.data[observationResult_1.OBSERVATION_VALUE]);
            const observationDate = (0, utils_1.formatDate)(obxSegment.data[observationResult_1.OBSERVATION_DATE]);
            if (observationValue === null) {
                continue;
            }
            // if results aren't final then ignore
            if (observationResultStatus !== 'F') {
                continue;
            }
            const result = await database_1.default.query(getDiagnosticMetricsQuery, [
                observationIdentifiers,
                observationUnits
            ]);
            if (result.rows.length) {
                for (const row of result.rows) {
                    if ((patientAge &&
                        patientAge >= row.min_age &&
                        patientAge <= row.max_age) ||
                        (row.min_age === null && row.max_age === null)) {
                        const diagnosticGroupResult = await database_1.default.query(getDiagnosticGroupsQuery, [row.diagnostic]);
                        const diagnosticGroup = diagnosticGroupResult.rows[0].diagnostic_groups;
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
                        };
                        matched_diagnostics.push(condition);
                        const everlabLowerLimit = row.everlab_lower;
                        const everlabUpperLimit = row.everlab_higher;
                        const standardLowerLimit = row.standard_lower;
                        const standardUpperLimit = row.standard_higher;
                        if (observationValue !== null &&
                            (observationValue <= standardLowerLimit ||
                                observationValue >= standardUpperLimit)) {
                            abnormal_diagnostics.push(condition);
                        }
                        if (observationValue !== null &&
                            (observationValue <= everlabLowerLimit ||
                                observationValue >= everlabUpperLimit)) {
                            abnormal_diagnostics_everlab.push(condition);
                        }
                    }
                }
            }
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    }
    return {
        matched_diagnostics,
        abnormal_diagnostics,
        abnormal_diagnostics_everlab
    };
}
exports.findConditionsFromReport = findConditionsFromReport;
