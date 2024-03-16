export interface Report {
  abnormal_diagnostics: Array<Condition>
  abnormal_diagnostics_everlab: Array<Condition>
  matched_diagnostics: Array<Condition>
}

export interface Condition {
  diagnostic: string
  diagnosticGroup: string
  everlab_lower: number
  everlab_upper: number
  name: string
  observationDate: string
  observationValue: number
  standard_lower: number
  standard_upper: number
  units: string
}
