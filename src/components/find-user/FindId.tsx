import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useState } from 'react'
import useFormValidation from '@/hooks/useFormValidation'
import { Button, FormInput } from '@/components/Common/UI'
import { fetchGetMemberId } from '@/apis/recovery'
import { Modal } from '../Common'
import { useNavigate } from 'react-router-dom'

const FindId = () => {
  const { phoneNumber, phoneNumberValid, handlePhoneNumberChange } =
    useFormValidation({ initialPhoneNumber: '' })
  const [name, setName] = useState<string>('')
  const [memberId, setMemberId] = useState<string>('')
  const [phoneNumberAlert, setPhoneNumberAlert] = useState<string>('')
  const [isToggle, setIsToggle] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const isValid = phoneNumberValid && name.length > 0

  const navigate = useNavigate()

  useEffect(() => {
    if (phoneNumber.length > 0) {
      phoneNumberValid
        ? setPhoneNumberAlert('')
        : setPhoneNumberAlert('전화번호 형식을 지켜주세유~')
    }
  }, [phoneNumber])

  const handleFindId = async () => {
    const res = await fetchGetMemberId({ name, phoneNum: phoneNumber })

    if (res.memberId !== '') {
      setIsToggle(true)
      setIsSuccess(true)
      setMemberId(res.memberId)
    } else {
      setIsToggle(true)
      setIsSuccess(false)
    }
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
          onClick={handleFindId}
        >
          아이디 찾기
        </Button>
      </ButtonContainer>
      {isToggle &&
        (isSuccess ? (
          <Modal
            onSetIsToggle={() => setIsToggle(!isToggle)}
            onRemoveButton={true}
            subTitle="회원님의 정보로 가입된 아이디는 아래와 같습니다."
            result={memberId}
            buttonText="비밀번호 찾기"
            onClick={() => navigate('/find-user/1')}
          />
        ) : (
          <Modal
            onSetIsToggle={() => setIsToggle(!isToggle)}
            onRemoveButton={true}
            subTitle="일치하는 정보가 없습니다."
          />
        ))}
    </>
  )
}

export default FindId

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
