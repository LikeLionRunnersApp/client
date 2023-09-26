import styled from '@emotion/styled'
import { useLocation, useNavigate } from 'react-router-dom'

const FindNavigator = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const path = location.pathname

  const moveTab = (tabName: string) => {
    tabName === 'id' ? navigate('/find-user/id') : navigate('/find-user/1')
  }

  return (
    <Container>
      <Navigator
        onClick={() => moveTab('id')}
        active={path === '/find-user/id'}
      >
        아이디 찾기
      </Navigator>
      <Navigator onClick={() => moveTab('pw')} active={path === '/find-user/1'}>
        비밀번호 찾기
      </Navigator>
    </Container>
  )
}

export default FindNavigator

const Container = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  height: 22px;
  padding: 0;
`

const Navigator = styled.li<{ active: boolean }>`
  width: 50%;
  color: #989491;
  text-align: center;
  line-height: 22px;
  font-size: 12px;
  border-bottom: ${({ active }) => (active ? `1px solid #ff9704` : undefined)};
  height: 100%;
  cursor: pointer;
`
