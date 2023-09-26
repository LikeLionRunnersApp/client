import styled from '@emotion/styled'
import { FormInput, Button } from '@components/Common/UI'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import useFormValidation from '@hooks/useFormValidation'
import { fetchSignUp } from '@/api/auth'

const UserProfileInput = () => {
  const { phoneNumber, phoneNumberValid, handlePhoneNumberChange } =
    useFormValidation({ initialPhoneNumber: '' })
  const [name, setName] = useState<string>('')
  const [phoneNumberAlert, setPhoneNumberAlert] = useState('')

  const navigate = useNavigate()
  const location = useLocation()
  const userInfo = location.state

  useEffect(() => {
    if (phoneNumber.length > 0) {
      phoneNumberValid
        ? setPhoneNumberAlert('')
        : setPhoneNumberAlert('전화번호 형식을 지켜주세유~')
    }
  }, [phoneNumber])

  const handleClickNext = async () => {
    const res = await fetchSignUp({ ...userInfo, phoneNum: phoneNumber, name })

    res.ok ? navigate('/signup/3') : alert('회원가입에 실패하였습니다.')
  }

  return (
    <>
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
        id="phoneNumber"
        name="phoneNumber"
        onChange={e => handlePhoneNumberChange(e.target.value)}
        value={phoneNumber}
        placeholder="예시) 000-0000-0000"
        hidden={false}
        label="전화번호 입력"
      />
      {<Alert isError={phoneNumberValid}>{phoneNumberAlert}</Alert>}
      <ButtonContainer>
        <Button
          type="submit"
          variant={name.length !== 0 && phoneNumberValid ? 'start' : 'login'}
          size="lg"
          disabled={name.length !== 0 && phoneNumberValid ? false : true}
          onClick={handleClickNext}
        >
          다음
        </Button>
      </ButtonContainer>
    </>
  )
}
export default UserProfileInput

const ButtonContainer = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 16px 24px;
  left: 0;
  bottom: 0;
`

const Alert = styled.strong<{ isError: boolean }>`
  position: relative;
  top: -90px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ isError }) => (isError ? '#989491' : '#FF9704')};
`
