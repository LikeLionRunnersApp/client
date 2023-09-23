import styled from '@emotion/styled'
import { useEffect } from 'react'
import { FormInput } from '@components/Common/UI'
import { useState } from 'react'
import useFormValidation from '@/hooks/useFormValidation'

const FindId = () => {
  const [name, setName] = useState('')
  const { phoneNumber, phoneNumberValid, handlePhoneNumberChange } =
    useFormValidation({ initialPhoneNumber: '' })
  const [phoneNumberAlert, setPhoneNumberAlert] = useState('')

  useEffect(() => {
    if (phoneNumber.length > 0) {
      phoneNumberValid
        ? setPhoneNumberAlert('')
        : setPhoneNumberAlert('전화번호 형식을 지켜주세유~')
    }
  }, [phoneNumber])

  return (
    <Container>
      <FormInput
        type="text"
        id="name"
        name="name"
        onChange={e => setName(e.target.value)}
        value={name}
        placeholder="이름을 입력해주세요"
        hidden={false}
        label="실명 입력"
      />
      <FormInput
        type="text"
        id="phoneNum"
        name="phoneNum"
        onChange={e => handlePhoneNumberChange(e.target.value)}
        value={phoneNumber}
        placeholder="예시) 010-0000-0000"
        hidden={false}
        label="전화번호 입력"
      />
      {<Alert isError={phoneNumberValid}>{phoneNumberAlert}</Alert>}
    </Container>
  )
}

export default FindId

const Container = styled.div`
  margin-top: 36px;

  & input {
    margin-bottom: 40px;
  }

  & input:last-of-type {
    margin-bottom: 0;
  }
`

const Alert = styled.strong<{ isError: boolean }>`
  position: relative;
  top: 8px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ isError }) => (isError ? '#989491' : '#FF9704')};
`
