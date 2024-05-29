import styled from 'styled-components'
import { ButtonProps } from './Button.types'

export const StyledButton = styled.button<{
  $iconPosition: ButtonProps['iconPosition']
}>`
  padding: 16px 16px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-direction: ${({ $iconPosition }) =>
    $iconPosition === 'left' ? 'row-reverse' : 'row'};
  background: ${({ theme }) => {
    return theme.colors.accentDark
  }}; ;

  color: ${({ theme }) => {
    return theme.colors.white
  }};
  border: 1px solid
    ${({ theme }) => {
      return theme.colors.raven.raven60
    }};
`
