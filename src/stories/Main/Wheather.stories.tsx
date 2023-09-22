import GlobalThemeProvider from '@assets/styles/GlobalThemeProvider'
import Wheather from '@components/Main/Wheather'

export default {
  title: 'Component/Main/Wheather',
  component: Wheather,
}

export const Default = () => {
  return (
    <GlobalThemeProvider>
      <Wheather />
    </GlobalThemeProvider>
  )
}
