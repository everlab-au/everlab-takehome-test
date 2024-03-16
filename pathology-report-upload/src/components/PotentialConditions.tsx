import { Condition } from '../types/report'
import { TestItem } from '../common/TestItem'
import { styled } from 'styled-components'
import { FaPlusCircle } from 'react-icons/fa'
import { FaCircleXmark } from 'react-icons/fa6'
import { useCallback, useState } from 'react'
import { TextContainer } from '../common/TextContainer'

const ButtonContainer = styled.div``

const Button = styled.button``

const Container = styled.div`
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: 10px;
  }
`

const StyledTestItem = styled(TestItem)`
  justify-content: space-between;
  border: 1px solid lightblue;
  border-radius: 5px;
  padding: 8px;
  background-color: lightblue;
  color: black;
`

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  justify-content: space-between;
  width: 100%;
`

function resultReason(condition: Condition) {
  if (
    !condition.standard_lower &&
    !condition.standard_upper &&
    !condition.everlab_lower &&
    !condition.everlab_upper
  ) {
    return 'Monitoring only'
  }
  if (condition.observationValue < condition.standard_lower) {
    return `Below standard (normal range: ${condition.standard_lower} - ${condition.standard_upper})`
  }
  if (condition.observationValue > condition.standard_upper) {
    return `Above standard (normal range: ${condition.standard_lower} - ${condition.standard_upper})`
  }
  if (condition.observationValue > condition.everlab_upper) {
    return `Above everlab (everlab range: ${condition.everlab_lower} - ${condition.everlab_upper})`
  }
  if (condition.observationValue < condition.everlab_lower) {
    return `Below everlab (everlab range: ${condition.everlab_lower} - ${condition.everlab_upper})`
  }
  if (condition.observationValue === condition.standard_lower) {
    return `At lower standard (normal range: ${condition.standard_lower} - ${condition.standard_upper})`
  }
  if (condition.observationValue === condition.standard_upper) {
    return `At upper standard (normal range: ${condition.standard_lower} - ${condition.standard_upper})`
  }
  if (condition.observationValue === condition.everlab_lower) {
    return `At lower everlab (everlab range: ${condition.everlab_lower} - ${condition.everlab_upper})`
  }
  if (condition.observationValue === condition.everlab_upper) {
    return `At upper everlab (everlab range: ${condition.everlab_lower} - ${condition.everlab_upper})`
  }
  return 'Within standard'
}

interface Props {
  potentialConditions: Array<Condition>
  setApprovedConditions: React.Dispatch<React.SetStateAction<Condition[]>>
  setDismissedConditions: React.Dispatch<React.SetStateAction<Condition[]>>
}

function PotentialConditions(props: Props) {
  const { potentialConditions, setApprovedConditions, setDismissedConditions } =
    props
  const [localConditions, setLocalConditions] =
    useState<Array<Condition>>(potentialConditions)

  const handleDelete = useCallback(
    (e) => {
      const name = e.currentTarget.dataset.conditionid
      setDismissedConditions((conditions) => {
        const condition = localConditions.find(
          (condition) => condition.name === name
        )
        if (condition === undefined) {
          return conditions
        }
        return conditions.concat(condition)
      })
      setLocalConditions((conditions) =>
        conditions.filter((condition) => condition.name !== name)
      )
    },
    [localConditions, setDismissedConditions]
  )

  const handleAdd = useCallback(
    (e) => {
      const name = e.currentTarget.dataset.conditionid
      setApprovedConditions((conditions) => {
        const condition = localConditions.find(
          (condition) => condition.name === name
        )
        if (condition === undefined) {
          return conditions
        }
        return conditions.concat(condition)
      })
      setLocalConditions((conditions) =>
        conditions.filter((condition) => condition.name !== name)
      )
    },
    [localConditions, setApprovedConditions]
  )

  return (
    <Container>
      {localConditions.map((condition) => (
        <StyledTestItem key={condition.name}>
          <DetailsContainer>
            <div>
              <div>{condition.name}</div>
              <div>
                <h3>Reason:</h3>
                <p> {resultReason(condition)}</p>
              </div>
            </div>
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
          </DetailsContainer>
          <ButtonContainer>
            <Button onClick={handleAdd} data-conditionid={condition.name}>
              <FaPlusCircle color='green' />
            </Button>
            <Button onClick={handleDelete} data-conditionid={condition.name}>
              <FaCircleXmark color='red' />
            </Button>
          </ButtonContainer>
        </StyledTestItem>
      ))}
    </Container>
  )
}

export default PotentialConditions
