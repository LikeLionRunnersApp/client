import styled from '@emotion/styled'

const LoginModal = () => {
  return <Container>로그인에 실패하였습니다. 다시 입력해주세요.</Container>
}

export default LoginModal

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #d9d9d9;
  width: 500px;
  height: 500px;
  padding: 24px;
  text-align: center;
`
