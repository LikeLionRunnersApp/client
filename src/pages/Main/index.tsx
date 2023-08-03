import styled from "@emotion/styled";

import { BaseLayout, Container } from "@components/Common";
import {
  Date,
  Wheather,
  Slide,
  Calendar,
  RecruitmentList,
} from "@components/Main";
import headerBackgroundImage from "@assets/images/Main/bg.png";
import run from "@assets/images/Main/run.svg";

const Main = () => {
  const vh = window.innerHeight;

  return (
    <BaseLayout>
      <Header image={headerBackgroundImage}>
        <Container>
          <FlexContainer>
            <Date />
            <Wheather />
          </FlexContainer>
          <Slide />
        </Container>
      </Header>
      <MainContainer>
        <Container>
          <div>
            <Title image={run}>모집 중인 뛰슈</Title>
            <Calendar />
          </div>
          <RecruitmentList />
        </Container>
      </MainContainer>
    </BaseLayout>
  );
};

export default Main;

const Header = styled.header<{ image: string }>`
  padding-top: 31px;
  padding-bottom: 12px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ image }) => image});
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const MainContainer = styled.main`
  padding-top: 16px;
  background: #f5f5f5;
`;

const Title = styled.h1<{ image: string }>`
  display: flex;
  font-size: 14px;
  align-items: center;
  margin-bottom: 25px;

  &::after {
    content: "";
    display: block;
    width: 22px;
    height: 13px;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 4px;
  }
`;
