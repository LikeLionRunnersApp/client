import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

interface Props {
  onTab(tabName: string): void
}

const FindNavigator = ({ onTab }: Props) => {
  const [selectedTab, setSelectedTab] = useState<string>('id')

  const navigate = useNavigate()

  const handleSetTab = (tabName: string) => {
    setSelectedTab(tabName)
    onTab(tabName)
    tabName === 'id' ? navigate('/find-user') : navigate('/find-user/1')
  }

  return (
    <Container>
      <Navigator
        onClick={() => handleSetTab('id')}
        active={selectedTab === 'id'}
      >
        아이디 찾기
      </Navigator>
      <Navigator
        onClick={() => handleSetTab('pw')}
        active={selectedTab === 'pw'}
      >
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
