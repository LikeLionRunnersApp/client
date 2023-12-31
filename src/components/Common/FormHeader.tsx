import styled from '@emotion/styled'
import Icon from '@components/Common/UI/Icon'
import { useNavigate } from 'react-router-dom'

interface Props {
  title: string
}

const FormHeader = ({ title, ...props }: Props) => {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <Icon name="prev" onClick={() => navigate(-1)} />
      <Title>{title}</Title>
    </HeaderContainer>
  )
}

export default FormHeader

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  background-color: #fff;
  position: relative;
`

const Title = styled.h1`
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
`
