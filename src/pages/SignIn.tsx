import { BaseLayout, Container } from '@components/Common'
import SignInHeader from '@/components/sign-in/SignInHeader'
import SignInForm from '@/components/sign-in/SignInForm'
import Navigate from '@/components/sign-in/Navigate'
import SocialLogin from '@/components/sign-in/SocialLogin'

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
