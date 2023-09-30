import { BaseLayout } from '@components/common'
import { Container } from '@components/common'

import HeaderBar from '@/components/detail/HeaderBar'
import Title from '@/components/detail/Title'
import Info from '@/components/detail/info/Info'
import Host from '@/components/detail/Host'
import Join from '@/components/detail/join/Join'
import FooterBar from '@/components/detail/FooterBar'

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
