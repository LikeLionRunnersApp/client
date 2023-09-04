import styled from '@emotion/styled'
import { ChangeEvent, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  id: string
  onChange(e: ChangeEvent<HTMLInputElement>): void
  value: string
  placeholder: string
}

const FormInput = ({
  type,
  name,
  id,
  onChange,
  value,
  placeholder,
  ...props
}: Props) => {
  return (
    <FormInputContainer
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      {...props}
    />
  )
}

export default FormInput

const FormInputContainer = styled.input`
  display: block;
  font-size: 20px;
  padding-bottom: 4px;
  outline: none;

  &::placeholder {
    color: #d9d9d9;
  }

  height: 30px;
  border-bottom: 2px solid #000;
  margin-bottom: 32px;
`
