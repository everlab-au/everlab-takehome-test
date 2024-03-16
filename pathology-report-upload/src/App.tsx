import { useEffect, useState } from 'react'
import ReportUpload from './components/ReportUpload'
import styled from 'styled-components'
import { TestsPerformed } from './components/TestsPerformed'
import { Report } from './types/report'
import { Condition } from './types/report'
import PotentialConditions from './components/PotentialConditions'
import Summary from './components/Summary'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  align-items: center;
`

const SectionContainer = styled.div`
  border: 1px solid lightblue;
  border-radius: 5px;
  border-bottom: none;
  padding: 8px;
`

const LayoutContainer = styled.div`
  width: 800px;
`

const ReportContainer = styled(SectionContainer)``

const UploadContainer = styled(SectionContainer)``

const PotentialConditionsContainer = styled(SectionContainer)``

const SummaryContainer = styled(SectionContainer)`
  border-bottom: 1px solid lightblue;
`

function App() {
  const [response, setResponse] = useState<Report | undefined>(undefined)
  const [testsPerformed, setTestsPerformed] = useState<Array<Condition>>([])
  const [potentialConditions, setPotentialConditions] = useState<
    Array<Condition>
  >([])
  const [approvedConditions, setApprovedConditions] = useState<
    Array<Condition>
  >([])
  const [dismissedConditions, setDismissedConditions] = useState<
    Array<Condition>
  >([])

  useEffect(() => {
    if (response) {
      setTestsPerformed(response.matched_diagnostics)
      setPotentialConditions(response.abnormal_diagnostics)
    }
  }, [response])

  return (
    <PageContainer>
      <LayoutContainer>
        <h1>Everlab Report Analyser</h1>
        <UploadContainer>
          <h2>Upload HL7 Report</h2>
          <ReportUpload setResponse={setResponse} />
        </UploadContainer>
        <ReportContainer>
          <h2>Tests performed</h2>
          {!!testsPerformed.length && (
            <TestsPerformed testsPerformed={testsPerformed} />
          )}
        </ReportContainer>
        {
          <PotentialConditionsContainer>
            <h2>Potential Conditions</h2>
            {!!potentialConditions.length && (
              <PotentialConditions
                setApprovedConditions={setApprovedConditions}
                setDismissedConditions={setDismissedConditions}
                potentialConditions={potentialConditions}
              />
            )}
          </PotentialConditionsContainer>
        }
        <SummaryContainer>
          <h2>Summary</h2>
          {(!!approvedConditions.length || !!dismissedConditions) && (
            <Summary
              approvedConditions={approvedConditions}
              dismissedConditions={dismissedConditions}
            />
          )}
        </SummaryContainer>
      </LayoutContainer>
    </PageContainer>
  )
}

export default App
