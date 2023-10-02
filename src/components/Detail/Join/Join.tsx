import styled from '@emotion/styled'
import JoinList from '@components/Detail/Join/JoinList'

const Join = () => {
  return (
    <Container>
      <Title>참여중인 멤버</Title>
      <UnorderedList>
        <JoinList />
        <JoinList />
        <JoinList />
      </UnorderedList>
    </Container>
  )
}

const Container = styled.div`
  padding: 16px 24px;
`

const Title = styled.h2`
  font-size: 14px;
  margin-bottom: 12px;
`

const UnorderedList = styled.ul`
  display: flex;
  overflow: scroll;
`

export default Join
