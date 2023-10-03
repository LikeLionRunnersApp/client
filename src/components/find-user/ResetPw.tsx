import { useLocation } from 'react-router-dom'
import { FormInput, Button } from '@/components/Common/UI'
import useFormValidation from '@/hooks/useFormValidation'
import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchResetPassword } from '@/apis/recovery'
import { Modal } from '../Common'

const ResetPw = () => {
  const {
    password,
    passwordValid,
    handlePasswordChange,
    confirmPassword,
    confirmPasswordValid,
    handleConfirmPasswordChange,
  } = useFormValidation({
    initialPassword: '',
  })
  const [passwordAlert, setPasswordAlert] = useState<string>('')
  const [confirmPasswordAlert, setConfirmPasswordAlert] = useState<string>('')
  const [isToggle, setIsToggle] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const navigate = useNavigate()
  const location = useLocation()
  const memberId = location.state?.memberId

  useEffect(() => {
    memberId === undefined && navigate('/find-user/1')
  }, [])

  useEffect(() => {
    if (password.length > 0) {
      passwordValid
        ? setPasswordAlert('')
        : setPasswordAlert('비밀번호는 특수문자 포함 8자 이상이에유~')
    }

    if (confirmPassword.length > 0) {
      confirmPasswordValid
        ? setConfirmPasswordAlert('')
        : setConfirmPasswordAlert('기존 비밀번호랑 달라유~')
    }
  }, [password, confirmPassword])

  const resetState = () => {
    setIsToggle(false)
    setIsSuccess(false)
  }

  const handleResetPassword = async () => {
    resetState()

    const res = await fetchResetPassword({
      memberId,
      password: confirmPassword,
    })

    if (res.ok) {
      setIsToggle(true)
      setIsSuccess(true)
    } else {
      setIsToggle(true)
      setIsSuccess(false)
    }
  }

  return (
    <>
      <FormInput
        type="password"
        id="password"
        name="password"
        onChange={e => handlePasswordChange(e.target.value)}
        value={password}
        placeholder="8자 이상 작성해주세요"
        hidden={false}
        label="비밀번호 재설정"
      />
      {<Alert isError={passwordValid}>{passwordAlert}</Alert>}
      <FormInput
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        onChange={e => handleConfirmPasswordChange(e.target.value)}
        value={confirmPassword}
        placeholder="비밀번호를 다시 한번 입력해주세요"
        hidden={false}
        label="비밀번호 확인"
      />
      {<Alert isError={confirmPasswordValid}>{confirmPasswordAlert}</Alert>}
      <ButtonContainer>
        <Button
          type="submit"
          variant={passwordValid && confirmPasswordValid ? 'start' : 'login'}
          size="lg"
          disabled={passwordValid && confirmPasswordValid ? false : true}
          onClick={handleResetPassword}
        >
          다음
        </Button>
      </ButtonContainer>
      {isToggle && isSuccess && (
        <Modal
          onSetIsToggle={() => setIsToggle(!isToggle)}
          onRemoveButton={true}
          subTitle="비밀번호 재설정을 완료하였습니다."
          buttonText="로그인 하러가기"
          onClick={() => navigate('/signin')}
        />
      )}
    </>
  )
}

export default ResetPw

const Alert = styled.strong<{ isError: boolean }>`
  position: relative;
  top: -90px;
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
