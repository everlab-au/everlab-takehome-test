import React from 'react'
import { Condition } from '../types/report'
import { TestItem } from '../common/TestItem'
import { FaCheckCircle } from 'react-icons/fa'
import { FaCircleXmark } from 'react-icons/fa6'
import { styled } from 'styled-components'
import { TextContainer } from '../common/TextContainer'

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  > * + * {
    margin-left: 8px;
  }
`

const StyledTestItem = styled(TestItem)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-top: 1px dashed grey;
`

interface Props {
  approvedConditions: Array<Condition>
  dismissedConditions: Array<Condition>
}

function Summary(props: Props) {
  const { approvedConditions, dismissedConditions } = props
  return (
    <div>
      {!!approvedConditions.length && (
        <>
          <h3>Approved conditions</h3>
          {approvedConditions.map((condition) => (
            <StyledTestItem key={condition.name}>
              <NameContainer>
                <FaCheckCircle color='green' />
                <div>{condition.name}</div>
              </NameContainer>
              <TextContainer>
                <div>{condition.observationValue}</div>
                <div>{condition.units}</div>
              </TextContainer>
              <div>
                <div>
                  <b>Standard range</b>
                  <div>
                    {condition.standard_lower} - {condition.standard_upper}
                  </div>
                </div>
                <div>
                  <b>Everlab range</b>
                  <div>
                    {condition.everlab_lower ?? condition.standard_lower} -{' '}
                    {condition.everlab_upper ?? condition.standard_upper}
                  </div>
                </div>
              </div>
            </StyledTestItem>
          ))}
        </>
      )}
      {!!dismissedConditions.length && (
        <>
          <h3>Dismissed conditions</h3>
          {dismissedConditions.map((condition) => (
            <StyledTestItem key={condition.name}>
              <NameContainer>
                <FaCircleXmark color='red' />
                <div>{condition.name}</div>
              </NameContainer>
              <TextContainer>
                <div>{condition.observationValue}</div>
                <div>{condition.units}</div>
              </TextContainer>
              <div>
                <div>
                  <b>Standard range</b>
                  <div>
                    {condition.standard_lower} - {condition.standard_upper}
                  </div>
                </div>
                <div>
                  <b>Everlab range</b>
                  <div>
                    {condition.everlab_lower ?? condition.standard_lower} -{' '}
                    {condition.everlab_upper ?? condition.standard_upper}
                  </div>
                </div>
              </div>
            </StyledTestItem>
          ))}
        </>
      )}
    </div>
  )
}

export default Summary
