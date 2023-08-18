import Form from '@components/Login/Form'

export default {
  title: 'Component/Login/Form/',
  component: Form,
}

export const Default = (args: any) => {
  return <Form {...args} />
}
