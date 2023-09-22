import styled from '@emotion/styled'
import { ChangeEvent, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  id: string
  onChange(e: ChangeEvent<HTMLInputElement>): void
  value: string | undefined
  placeholder: string
  hidden: boolean
  label: string
}

const FormInput = ({
  type,
  name,
  id,
  onChange,
  value,
  placeholder,
  hidden,
  label,
  ...props
}: Props) => {
  return (
    <>
      <Label htmlFor={id} hidden={hidden}>
        {label}
      </Label>
      <FormInputContainer
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        {...props}
      />
    </>
  )
}

export default FormInput

const Label = styled.label<{ hidden: boolean }>`
  ${({ hidden }) =>
    hidden &&
    `position: absolute;
  z-index: -100;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;`}
  display: block;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 16px;
`

const FormInputContainer = styled.input`
  display: block;
  font-size: 20px;
  padding-bottom: 4px;
  outline: none;
  width: 100%;

  &::placeholder {
    color: #d9d9d9;
  }

  height: 30px;
  border-bottom: 2px solid #000;
`
