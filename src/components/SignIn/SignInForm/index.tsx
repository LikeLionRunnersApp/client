import { useEffect } from 'react'

import styled from '@emotion/styled'

import { Button, FormInput } from '@components/Common/UI'
import { FormEvent, useState } from 'react'
import useFormValidation from '@hooks/useFormValidation'
import { fetchLogin } from '@api/auth'
import LoginModal from '../LoginModal'
import { useNavigate } from 'react-router-dom'

const SignInForm = () => {
  const {
    memberId,
    password,
    validate,
    handleMemberIdChange,
    handlePasswordChange,
  } = useFormValidation({ initialMemberId: '', initialPassword: '' })

  const [alert, setAlert] = useState('')
  const [isLogined, setIsLogined] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    memberId.length > 0 || password.length > 0
      ? setAlert('')
      : setAlert('먼저 로그인이 필요해유')
  }, [memberId, password])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await fetchLogin({ memberId, password })
    if (res === undefined) {
      setIsLogined(true)
    } else {
      localStorage.setItem('token', JSON.stringify(res.token))
      setIsLogined(false)
      navigate('/')
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Alert>{alert}</Alert>
      <FormInput
        type="text"
        id="memberId"
        name="memberId"
        onChange={e => handleMemberIdChange(e.target.value)}
        value={memberId}
        placeholder="이메일을 입력해주세요"
        hidden={true}
        label="이메일"
      />
      <FormInput
        type="password"
        name="password"
        id="password"
        onChange={e => handlePasswordChange(e.target.value)}
        value={password}
        placeholder="비밀번호를 입력해주세요"
        hidden={true}
        label="비밀번호"
      />
      <Button type="submit" variant={validate ? 'start' : 'login'} size="lg">
        로그인하기
      </Button>
      {isLogined && <LoginModal />}
    </Container>
  )
}

const Container = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;

  & input {
    margin-bottom: 32px;
  }
`

const Alert = styled.strong`
  position: absolute;
  top: -24px;
  left: 0;
  font-size: 14px;
  color: #989491;
  font-weight: 400;
`

export default SignInForm
