import GlobalThemeProvider from '@assets/styles/GlobalThemeProvider'
import Join from '@components/Detail/Join'

export default {
  title: 'Component/Detail/Join',
  component: Join,
}

export const Default = (args: any) => {
  return (
    <>
      <GlobalThemeProvider>
        <Join {...args} />
      </GlobalThemeProvider>
    </>
  )
}
