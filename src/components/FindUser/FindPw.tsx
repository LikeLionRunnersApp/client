import styled from '@emotion/styled'
import { FormInput } from '../Common/UI'
import useFormValidation from '@/hooks/useFormValidation'
import { useState, useEffect } from 'react'

const FindPw = () => {
  const {
    memberId,
    memberIdValid,
    handleMemberIdChange,
    phoneNumber,
    handlePhoneNumberChange,
    phoneNumberValid,
  } = useFormValidation({
    initialMemberId: '',
  })

  const [name, setName] = useState('')
  const [phoneNumberAlert, setPhoneNumberAlert] = useState<string>('')
  const [memberIdAlert, setMemberIdAlert] = useState<string>('')
  const [isVerification, setIsVerification] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')

  useEffect(() => {
    if (memberId.length > 0) {
      memberIdValid
        ? setMemberIdAlert('')
        : setMemberIdAlert('이메일 형식을 지켜주세유~')
    }

    if (phoneNumber.length > 0) {
      phoneNumberValid
        ? setPhoneNumberAlert('')
        : setPhoneNumberAlert('전화번호 형식을 지켜주세유~')
    }
  }, [memberId, phoneNumber])

  const checkVerification = () => {
    const isValid = memberIdValid && phoneNumberValid
    if (!isValid) return console.log('정보를 잘 입력해주세요.')
    // /sendAuth
    // memberId, name, phoneNum => ""
    setIsVerification(true)
  }

  // const checkVerificationcode = () => {}

  return (
    <Container>
      <FormInput
        type="text"
        id="memberId"
        name="memberId"
        onChange={e => handleMemberIdChange(e.target.value)}
        value={memberId}
        placeholder="이메일을 입력해주세요"
        hidden={false}
        label="아이디 입력"
      />
      {<Alert isError={memberIdValid}>{memberIdAlert}</Alert>}
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
      <ConfirmButton type="button" onClick={checkVerification}>
        중복확인
      </ConfirmButton>
      {isVerification && (
        <VerificationBox>
          <FormInput
            type="text"
            id="code"
            name="code"
            onChange={e => setVerificationCode(e.target.value)}
            value={verificationCode}
            placeholder="이메일로 전달받은 번호를 입력해주세요"
            hidden={false}
            label="인증번호 입력"
          />
        </VerificationBox>
      )}
    </Container>
  )
}

export default FindPw
const Container = styled.div`
  margin-top: 36px;

  & input {
    margin-bottom: 40px;
  }

  & input:last-of-type {
    margin-bottom: 0;
  }
`

const ConfirmButton = styled.button`
  margin: 0 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 28px;
  padding: 10px 16px;
  height: 30px;
  background-color: #fff;
  border-radius: 16px;
  border: 1px solid #d9d9d9;
  font-size: 14px;
  cursor: pointer;
`

const Alert = styled.strong<{ isError: boolean }>`
  position: relative;

  &:first-of-type {
    top: -30px;
  }
  &:last-of-type {
    top: 12px;
  }

  font-size: 12px;
  font-weight: 400;
  color: ${({ isError }) => (isError ? '#989491' : '#FF9704')};
`

const VerificationBox = styled.div`
  margin-top: 50px;
`
