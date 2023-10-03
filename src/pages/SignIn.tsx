import { BaseLayout, Container } from '@components/Common'
import SignInHeader from '@/components/sign-in/SignInHeader'
import SignInForm from '@/components/sign-in/SignInForm'
import Navigate from '@/components/sign-in/Navigate'
import SocialLogin from '@/components/sign-in/SocialLogin'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    token && navigate('/')
  }, [])

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
