import { useEffect } from 'react'

import styled from '@emotion/styled'

import { Button, FormInput } from '@components/Common/UI'
import { FormEvent, useState } from 'react'
import useFormValidation from '@hooks/useFormValidation'
const Form = () => {
  const { email, password, validate, handleEmailChange, handlePasswordChange } =
    useFormValidation({ initialEmail: '', initialPassword: '' })

  const [alert, setAlert] = useState('')

  useEffect(() => {
    email.length > 0 || password.length > 0
      ? setAlert('')
      : setAlert('먼저 로그인이 필요해유')
  }, [email, password])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // 사용자가 있는지 없는지 API 요청 및 응답
    // 맞으면 /main으로 이동, 틀리면 setAlert()
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Alert>{alert}</Alert>
      <FormInput
        type="text"
        id="email"
        name="email"
        onChange={e => handleEmailChange(e.target.value)}
        value={email}
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
    </Container>
  )
}

const Container = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
`

const Alert = styled.strong`
  position: absolute;
  top: -24px;
  left: 0;
  font-size: 14px;
  color: #989491;
  font-weight: 400;
`

const Label = styled.label`
  position: absolute;
  z-index: -100;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
`

export default Form
