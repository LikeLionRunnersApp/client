import styled from '@emotion/styled'
import { FormInput, Button } from '@components/Common/UI'
import useFormValidation from '@hooks/useFormValidation'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchMemberIdDuplicated } from '@/apis/auth'

const LoginCredentialsInput = () => {
  const {
    memberId,
    password,
    confirmPassword,
    memberIdValid,
    passwordValid,
    confirmPasswordValid,
    handleMemberIdChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
  } = useFormValidation({
    initialMemberId: '',
    initialPassword: '',
    initialConfirmPassword: '',
  })

  const navigate = useNavigate()

  const [memberIdDuplicated, setMemberIdDuplicated] = useState<string>('')
  const [memberIdAlert, setMemberIdAlert] = useState<string>('')
  const [passwordAlert, setPasswordAlert] = useState<string>('')
  const [confirmPasswordAlert, setConfirmPasswordAlert] = useState<string>('')
  const [isDuplicatedMemberId, setIsDuplicatedMemberId] =
    useState<boolean>(false)

  useEffect(() => {
    if (memberId.length > 0) {
      memberIdValid
        ? setMemberIdAlert('')
        : setMemberIdAlert('이메일 형식을 지켜주세유~')
    }

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
  }, [memberId, password, confirmPassword])

  const checkDuplicateEmail = async () => {
    const res = await fetchMemberIdDuplicated(memberId)
    setIsDuplicatedMemberId(res.ok)
    isDuplicatedMemberId === true
      ? setMemberIdDuplicated('사용 가능한 이메일이어유~')
      : setMemberIdDuplicated('이미 사용하고 있는 이메일이어유~')
  }

  const handleClickNext = async () => {
    !isDuplicatedMemberId
      ? alert('이메일 중복을 확인해주세요.')
      : navigate('/signup/2', {
          state: {
            memberId,
            password,
          },
        })
  }

  return (
    <>
      <EmailContainer>
        <div>
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
        </div>
        <ConfirmButton type="button" onClick={checkDuplicateEmail}>
          중복확인
        </ConfirmButton>
      </EmailContainer>
      {!memberIdValid && <Alert isError={memberIdValid}>{memberIdAlert}</Alert>}
      {
        <Alert
          isError={
            memberIdDuplicated === '사용 가능한 이메일이어유~' ? true : false
          }
        >
          {memberIdDuplicated}
        </Alert>
      }

      <FormInput
        type="password"
        name="password"
        id="password"
        onChange={e => handlePasswordChange(e.target.value)}
        value={password}
        placeholder="특수문자 포함하여 8자 이상 작성해주세요"
        hidden={false}
        label="비밀번호 입력"
      />
      {<Alert isError={passwordValid}>{passwordAlert}</Alert>}
      <FormInput
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        onChange={e => handleConfirmPasswordChange(e.target.value)}
        value={confirmPassword}
        placeholder="비밀번호를 다시 한번 입력해주세요"
        hidden={false}
        label="비밀번호 확인"
      ></FormInput>
      {<Alert isError={confirmPasswordValid}>{confirmPasswordAlert}</Alert>}

      <ButtonContainer>
        <Button
          type="submit"
          variant={
            memberIdValid && passwordValid && confirmPasswordValid
              ? 'start'
              : 'login'
          }
          size="lg"
          disabled={
            memberIdValid && passwordValid && confirmPasswordValid
              ? false
              : true
          }
          onClick={handleClickNext}
        >
          다음
        </Button>
      </ButtonContainer>
    </>
  )
}

export default LoginCredentialsInput

const EmailContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ConfirmButton = styled.button`
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
