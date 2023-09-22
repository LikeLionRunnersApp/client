import { ReactNode } from 'react'
import styled from '@emotion/styled'

interface Props {
  type: 'button' | 'submit'
  variant: 'participation' | 'complete' | 'start' | 'login' | 'socialLogin'
  color?: string
  size: 'sm' | 'lg'
  children: ReactNode
  disabled?: boolean
  onClick?: () => void
}

const Button = ({
  type,
  variant,
  size,
  color,
  onClick,
  children,
  disabled,
  ...props
}: Props) => {
  return (
    <ButtonContainer
      type={type}
      size={size}
      variant={variant}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button

const ButtonContainer = styled.button<{
  size: string
  variant: string
  color?: string
  disabled?: boolean
}>`
  border: none;
  width: ${({ size }) => (size === 'lg' ? '100%' : '62px')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ size }) => (size === 'lg' ? '40px' : '24px')};
  background-color: ${({ variant }) =>
    variant === 'participation'
      ? 'black'
      : variant === 'complete'
      ? '#989491'
      : variant === 'login'
      ? '#D9D9D9'
      : variant === 'socialLogin'
      ? '#F9E200'
      : '#FF9704'};
  font-weight: 700;
  font-size: ${({ size }) => (size === 'sm' ? '12px' : '20px')};
  border-radius: ${({ size }) => (size === 'sm' ? '12px' : '32px')};
  color: ${({ color }) => (color ? color : '#fff')};
  cursor: pointer;
  transition: all 0.15s ease-out;

  & img {
    margin-right: 12px;
  }

  &:hover {
    box-shadow: 3px -3px 0px 0px rgba(255, 255, 255, 0.4) inset;
  }

  &:active {
    box-shadow: none;
    background-color: ${({ variant, disabled }) => {
      if (variant === 'participation' && !disabled) {
        return '#989491'
      } else if (variant === 'socialLogin' && !disabled) {
        return '##ff9704'
      }
    }};
  }
`
