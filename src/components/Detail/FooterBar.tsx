import styled from '@emotion/styled'
import { Button } from '@components/Common/UI'
import { Icon } from '@components/Common/UI'

const FooterBar = () => {
  return (
    <FooterBarContainer>
      <Container>
        <CheeringButton>
          <Icon name="lgClickCheering" />
          <Count>12</Count>
        </CheeringButton>
        <Button type="button" variant="participation" size="lg">
          참여하기
        </Button>
      </Container>
    </FooterBarContainer>
  )
}

const FooterBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 72px;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.1);
`

const CheeringButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 9px;
  align-items: center;
`

const Count = styled.strong`
  position: relative;
  top: -8px;
  color: #ff9704;
`

const Container = styled.div`
  display: flex;
  width: 340px;
  justify-content: center;
  align-items: center;
`

export default FooterBar
