import { useEffect } from 'react'

import styled from '@emotion/styled'

import { Button } from '@components/Common/UI'
import { ChangeEvent, FormEvent, useState } from 'react'

const Form = () => {
  const [input, setInput] = useState({
    id: '',
    password: '',
  })
  const [color, setColor] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  useEffect(() => {
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g

    return input.id.includes('@') &&
      input.password.length >= 8 &&
      regExp.test(input.password)
      ? setColor('#d9d9d9')
      : setColor('')
  }, [input.id, input.password])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Label htmlFor="id">이메일</Label>
      <Input
        type="text"
        id="id"
        name="id"
        onChange={handleChange}
        value={input.id}
        placeholder="이메일을 입력해주세요"
      />
      <Label htmlFor="password">비밀번호</Label>
      <Input
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
        value={input.password}
        placeholder="비밀번호를 입력해주세요"
      />
      <Button type="submit" variant="login" size="lg" color={color}>
        로그인하기
      </Button>
    </Container>
  )
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  position: absolute;
  z-index: -100;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
`

const Input = styled.input`
  display: block;
  font-size: 20px;
  padding-bottom: 4px;

  &::placeholder {
    color: #d9d9d9;
  }

  height: 30px;
  border-bottom: 2px solid #000;
  margin-bottom: 32px;
`

export default Form
