import Button from '@components/Common/UI/Button'

export default {
  title: 'Component/Common/UI/Button',
  component: Button,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'lg'] },
    variant: {
      control: 'radio',
      options: ['participation', 'complete', 'start'],
    },
  },
}

export const Default = (args: any) => {
  return <Button {...args}>참여하기</Button>
}
