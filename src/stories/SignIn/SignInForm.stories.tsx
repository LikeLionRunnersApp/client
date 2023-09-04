import SignInForm from '@components/SignIn/SignInForm'

export default {
  title: 'Component/SignIn/SignInForm/',
  component: SignInForm,
}

export const Default = (args: any) => {
  return <SignInForm {...args} />
}
