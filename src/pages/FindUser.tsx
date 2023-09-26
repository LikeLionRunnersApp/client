import { BaseLayout, Container } from '@components/Common'
import FormHeader from '@components/Common/FormHeader'
import FindNavigator from '@components/FindUser/FindNavigator'
import { Outlet } from 'react-router-dom'
import styled from '@emotion/styled'

const FindUser = () => {
  return (
    <>
      <BaseLayout>
        <FormHeader title="아이디/비밀번호 찾기" />
        <FindNavigator />
        <Container>
          <FormContainer>
            <Outlet />
          </FormContainer>
        </Container>
      </BaseLayout>
    </>
  )
}

export default FindUser

const FormContainer = styled.div`
  margin-top: 36px;

  & input {
    margin-bottom: 40px;
  }

  & input:last-of-type {
    margin-bottom: 0;
  }
`
