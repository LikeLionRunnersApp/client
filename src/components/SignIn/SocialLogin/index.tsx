import styled from '@emotion/styled'
import Button from '@components/Common/UI/Button'
import { Icons } from '@assets/images/Icon'

const SocialLogin = () => {
  return (
    <div>
      <Title>간편로그인</Title>
      <Button type="button" variant="socialLogin" size="lg" color="black">
        <img src={Icons['kakao']} alt="kakao" />
        카카오톡 로그인
      </Button>
    </div>
  )
}

const Title = styled.h2`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  color: #d9d9d9;
  margin-bottom: 16px;

  &::before {
    display: block;
    content: '';
    width: 88px;
    background-color: #d9d9d9;
    height: 1px;
  }

  &::after {
    display: block;
    content: '';
    width: 88px;
    background-color: #d9d9d9;
    height: 1px;
  }
`

export default SocialLogin
