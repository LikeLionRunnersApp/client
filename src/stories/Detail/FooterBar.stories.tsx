import GlobalThemeProvider from '@assets/styles/GlobalThemeProvider'
import FooterBar from '@/components/Detail/FooterBar'

export default {
  title: 'Component/Detail/FooterBar',
  component: FooterBar,
}

export const Default = (args: any) => {
  return (
    <GlobalThemeProvider>
      <FooterBar {...args} />
    </GlobalThemeProvider>
  )
}
