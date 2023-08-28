import styled from "@emotion/styled";

const Navigate = () => {
  return (
    <NavContainer>
      <UnorderedList>
        <li>아이디/비밀번호 찾기</li>
        <li>회원가입</li>
      </UnorderedList>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  margin-top: 24px;
  margin-bottom: 48px;
`;

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
`;

export default Navigate;
