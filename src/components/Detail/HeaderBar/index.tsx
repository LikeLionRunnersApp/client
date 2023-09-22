import styled from '@emotion/styled'
import { Icon } from '@components/Common/UI'

const HeaderBar = () => {
  return (
    <Nav>
      <Icon name="prev" />
      <div>
        <Icon name="share" />
        <Icon name="edit" />
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > i {
    margin-left: -8px;
  }
`

export default HeaderBar
