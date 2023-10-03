import styled from '@emotion/styled'
import { Button, Icon } from './UI'

interface Props {
  onSetIsToggle: () => void
  subTitle?: string
  result?: string
  onRemoveButton?: boolean
  buttonText?: string
  onClick?: () => void
}

const Modal = ({
  onSetIsToggle,
  onRemoveButton,
  result,
  subTitle,
  buttonText,
  onClick,
}: Props) => {
  return (
    <Container>
      {onRemoveButton && <Icon name="remove" onClick={onSetIsToggle} />}
      <ResultContainer>
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
        {result && <Result>{result}</Result>}
        {buttonText && (
          <Button type="button" variant="start" size="lg" onClick={onClick}>
            {buttonText}
          </Button>
        )}
      </ResultContainer>
    </Container>
  )
}

export default Modal

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 343px;
  background-color: #fff;
  border-radius: 8px;
  padding: 45px 32px 32px 32px;
  border: 1px solid #d9d9d9;
  min-height: 204px;

  & i {
    position: absolute;
    top: 9px;
    right: 11px;
  }

  & button {
    font-size: 16px;
  }
`

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const SubTitle = styled.strong`
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  font-weight: 400;
`

const Result = styled.strong`
  display: block;
  font-size: 20px;
  margin: 50px 0 60px 0;
`
