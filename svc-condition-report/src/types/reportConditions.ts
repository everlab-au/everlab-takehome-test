export type ReportConditions = {
  matched_diagnostics: Array<Condition>
  abnormal_diagnostics: Array<Condition>
  abnormal_diagnostics_everlab: Array<Condition>
}

export type Condition = {
  name: string
  everlab_upper: number
  everlab_lower: number
  standard_upper: number
  standard_lower: number
  units: string
  diagnostic: string
  observationDate: string
  observationValue: number
}
