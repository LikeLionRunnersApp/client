import FormHeader from '@components/Common/FormHeader'
import { BaseLayout, Container } from '@components/Common'
import { Outlet } from 'react-router-dom'
import styled from '@emotion/styled'

const SignUp = () => {
  return (
    <BaseLayout>
      <FormHeader title="회원가입" />
      <Container>
        <FormContainer>
          <Outlet />
        </FormContainer>
      </Container>
    </BaseLayout>
  )
}

export default SignUp

const FormContainer = styled.div`
  margin-top: 36px;

  & input {
    margin-bottom: 96px;
  }
`
