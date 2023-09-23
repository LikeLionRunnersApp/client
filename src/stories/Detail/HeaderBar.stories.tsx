import GlobalThemeProvider from '@assets/styles/GlobalThemeProvider'
import HeaderBar from '@/components/Detail/HeaderBar'

export default {
  title: 'Component/Detail/HeaderBar',
  component: HeaderBar,
}

export const Default = (args: any) => {
  return (
    <GlobalThemeProvider>
      <HeaderBar {...args} />
    </GlobalThemeProvider>
  )
}
