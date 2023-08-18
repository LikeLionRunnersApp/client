import { BaseLayout } from '@components/Common'
import { Container } from '@components/Common'

import Form from '@components/Login/Form'
import styled from '@emotion/styled'

const Login = () => {
  return (
    <BaseLayout>
      <Container>
        <Header>
          <h1>
            뛰슈에 온 걸 <br /> 환영해유~
          </h1>
        </Header>
        <Form />
      </Container>
    </BaseLayout>
  )
}

const Header = styled.header`
  font-family: 'JGaegujaengyi-Medium-KO';
  display: flex;
  align-items: center;
  height: 242px;

  & h1 {
    font-size: 32px;
  }
`
export default Login
