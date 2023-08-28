import styled from "@emotion/styled";
import cloud from "@assets/images/Login/cloud.png";

const LoginHeader = () => {
  return (
    <HeaderContainer>
      <img src={cloud} alt="cloud" />
      <img src={cloud} alt="cloud" />
      <h1>
        뛰슈에 온 걸 <br /> 환영해유~
      </h1>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: relative;
  font-family: "JGaegujaengyi-Medium-KO";
  display: flex;
  align-items: center;
  height: 242px;
  margin-bottom: 50px;

  & h1 {
    font-size: 32px;
  }

  & img {
    position: absolute;
  }

  & img:first-of-type {
    top: 20px;
    left: 172px;
  }

  & img:nth-of-type(2) {
    top: 151px;
    left: 310px;
  }
`;

export default LoginHeader;
