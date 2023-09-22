import { BaseLayout } from '@components/Common'
import { Container } from '@components/Common'

import HeaderBar from '@components/Detail/HeaderBar'
import Title from '@components/Detail/Title'
import Info from '@components/Detail/Info'
import Host from '@components/Detail/Host'
import Join from '@components/Detail/Join'
import FooterBar from '@components/Detail/FooterBar'

import styled from '@emotion/styled'

export interface ITitle {
  flag: 'interval' | 'run' | 'work'
  title: string
}

export interface IInfo extends ITitle {
  totalMember: string
  joinMember: string
  location: string
  play_time: number
  content: string
  place: string
  host: string[]
}

const Detail = () => {
  return (
    <BaseLayout>
      <Header>
        <Container>
          <HeaderBar />
          <Title />
        </Container>
      </Header>
      <Main>
        <Container>
          <Info />
        </Container>
        <Host />
        <Join />
        <FooterBar />
      </Main>
    </BaseLayout>
  )
}

export default Detail

const Header = styled.header`
  position: relative;
  height: 176px;
  background-color: #d9d9d9;
`

const Main = styled.main``
