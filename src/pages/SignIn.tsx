import { BaseLayout } from '@components/Common'
import { Container } from '@components/Common'
import SignInHeader from '@components/SignIn/SignInHeader'
import SignInForm from '@components/SignIn/SignInForm'
import Navigate from '@components/SignIn/Navigate'
import SocialLogin from '@components/SignIn/SocialLogin'

const SignIn = () => {
  return (
    <BaseLayout>
      <Container>
        <SignInHeader />
        <SignInForm />
        <Navigate />
        <SocialLogin />
      </Container>
    </BaseLayout>
  )
}

export default SignIn
