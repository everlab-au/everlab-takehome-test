import { styled } from 'styled-components'

export const TestItem = styled.div`
  display: flex;
  align-items: center;
  > * + * {
    margin-left: 10px;
  }
`
