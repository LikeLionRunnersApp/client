import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Navigate = () => {
  return (
    <NavContainer>
      <UnorderedList>
        <li>
          <Link to="/find-user/id">아이디/비밀번호 찾기</Link>
        </li>
        <li>
          <Link to="/signup/1">회원가입</Link>
        </li>
      </UnorderedList>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  margin-top: 24px;
  margin-bottom: 48px;

  & a {
    text-decoration: none;
    color: #d9d9d9;
  }
`

const UnorderedList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d9d9d9;
  font-weight: 700;

  & li {
    margin-right: 32px;
  }

  & li:last-of-type {
    margin-right: 0;
  }
`

export default Navigate
