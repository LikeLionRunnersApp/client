import styled from '@emotion/styled'
import useFormValidation from '@/hooks/useFormValidation'
import { useState, useEffect } from 'react'
import { Button, FormInput } from '@/components/Common/UI'
import { Modal } from '@components/Common'
import { useNavigate } from 'react-router-dom'
import { fetchAuthSend, fetchAuthCheck } from '@/apis/recovery'

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
  const [isVerificationBox, setIsVerificationBox] = useState(false)
  const [verificationCode, setVerificationCode] = useState<string>('')
  const [isToggle, setIsToggle] = useState<boolean>(false)
  const [isValid, setIsValid] = useState<boolean>(false)
  const [isCheckVerification, setIsCheckVerification] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const navigate = useNavigate()

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

  const resetState = () => {
    setIsToggle(false)
    setIsValid(false)
    setIsCheckVerification(false)
  }

  const validateForm = () => {
    const isValid = memberIdValid && phoneNumberValid
    if (!isValid) {
      setIsToggle(true)
      setIsValid(true)
      return false
    }
    return true
  }

  const checkVerification = async () => {
    resetState()
    if (!validateForm()) return

    const res = await fetchAuthSend({ memberId, name, phoneNum: phoneNumber })

    if (res.ok) {
      setIsVerificationBox(true)
    } else {
      setIsToggle(true)
      setIsCheckVerification(true)
    }
  }

  const checkVerificationCode = async () => {
    const res = await fetchAuthCheck({ memberId, authCode: verificationCode })

    if (res.ok) {
      navigate('/find-user/2', { state: { memberId } })
    } else {
      setIsToggle(true)
      setIsSuccess(true)
    }
  }

  return (
    <>
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
      {isVerificationBox && (
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
      <ButtonContainer>
        <Button
          type="submit"
          variant={verificationCode.length > 0 ? 'start' : 'login'}
          size="lg"
          disabled={verificationCode.length > 0 ? false : true}
          onClick={checkVerificationCode}
        >
          다음
        </Button>
      </ButtonContainer>
      {isToggle && isValid && (
        <Modal
          onSetIsToggle={() => setIsToggle(!isToggle)}
          onRemoveButton={true}
          subTitle="입력하신 형식이 잘못되었습니다."
        />
      )}
      {isToggle && isCheckVerification && (
        <Modal
          onSetIsToggle={() => setIsToggle(!isToggle)}
          onRemoveButton={true}
          subTitle="일치하는 정보가 없습니다."
        />
      )}
      {isToggle && isSuccess && (
        <Modal
          onSetIsToggle={() => setIsToggle(!isToggle)}
          onRemoveButton={true}
          subTitle="인증번호가 일치하지 않습니다."
        />
      )}
    </>
  )
}

export default FindPw

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

const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 16px 24px;
  left: 0;
  bottom: 0;
`
