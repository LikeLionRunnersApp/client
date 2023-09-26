import styled from '@emotion/styled'
import { useEffect } from 'react'
import { FormInput } from '@components/Common/UI'
import { useState } from 'react'
import useFormValidation from '@/hooks/useFormValidation'
import { Button } from '@components/Common/UI'

const FindId = () => {
  const { phoneNumber, phoneNumberValid, handlePhoneNumberChange } =
    useFormValidation({ initialPhoneNumber: '' })
  const [name, setName] = useState('')
  const [phoneNumberAlert, setPhoneNumberAlert] = useState('')

  const isValid = phoneNumberValid && name.length > 0

  useEffect(() => {
    if (phoneNumber.length > 0) {
      phoneNumberValid
        ? setPhoneNumberAlert('')
        : setPhoneNumberAlert('전화번호 형식을 지켜주세유~')
    }
  }, [phoneNumber])

  const handleShowId = () => {
    // 일치하지 않는 정보 일 경우
    return alert('일치하는 정보가 없습니다.')

    // 일치할 경우 id출력
  }

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
      <ButtonContainer>
        <Button
          type="submit"
          variant={isValid ? 'start' : 'login'}
          size="lg"
          disabled={isValid ? false : true}
          onClick={handleShowId}
        >
          아이디 찾기
        </Button>
      </ButtonContainer>
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

const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 16px 24px;
  left: 0;
  bottom: 0;
`
