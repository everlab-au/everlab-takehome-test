import React from 'react'
import { Condition } from '../types/report'
import { FaCheckCircle } from 'react-icons/fa'
import { styled } from 'styled-components'
import { TestItem } from '../common/TestItem'
import { TextContainer } from '../common/TextContainer'

const StyledTestItem = styled(TestItem)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const StyledHeading3 = styled.h3`
  margin-bottom: 0;
`

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  > * + * {
    margin-left: 8px;
  }
`

interface Props {
  testsPerformed: Array<Condition>
}

export function TestsPerformed(props: Props) {
  const { testsPerformed } = props

  const diagnosticGroups: { [key: string]: Array<Condition> } = {}

  testsPerformed.forEach((condition) => {
    const { diagnosticGroup } = condition
    if (diagnosticGroup) {
      if (!diagnosticGroups[diagnosticGroup]) {
        diagnosticGroups[diagnosticGroup] = []
      }
      diagnosticGroups[diagnosticGroup].push(condition)
    }
  })

  const sortedGroups = Object.keys(diagnosticGroups).sort()

  return (
    <div>
      {sortedGroups.map((group) => (
        <div key={group}>
          <StyledHeading3>{group}</StyledHeading3>
          <div>
            {diagnosticGroups[group].map((test) => (
              <StyledTestItem key={test.name}>
                <NameContainer>
                  <FaCheckCircle color='green' />
                  <div>{test.name}</div>
                </NameContainer>
                <TextContainer>
                  <div>{test.observationValue}</div>
                  <div>{test.units}</div>
                </TextContainer>
                <TextContainer>
                  <div>{test.observationDate}</div>
                </TextContainer>
              </StyledTestItem>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
