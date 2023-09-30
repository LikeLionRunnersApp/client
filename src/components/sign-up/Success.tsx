import styled from '@emotion/styled'
import { Button } from '@/components/common/UI'
import { useNavigate } from 'react-router-dom'

const Success = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Content>
        <strong>환영해유!</strong>
        <p>
          가입이 완료되었슈 <br /> 그럼 뛰슈를 시작해볼까유?
        </p>
      </Content>
      <Button
        type="button"
        variant="participation"
        size="lg"
        onClick={() => navigate('/')}
      >
        시작하기
      </Button>
    </Container>
  )
}

export default Success

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & button {
    width: 278px;
    margin: 0 auto;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & strong {
    font-size: 30px;
    margin-bottom: 24px;
  }

  & p {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  }

  margin-bottom: 58px;
`
