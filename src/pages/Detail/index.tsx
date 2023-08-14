import { BaseLayout } from "@components/Common";
import Title from "@components/Detail/Title";
import Info from "@components/Detail/Info";
import { Container } from "@components/Common";

import styled from "@emotion/styled";

export interface ITitle {
  flag: "interval" | "run" | "work";
  title: string;
}

export interface IInfo {
  totalMember: string;
  joinMember: string;
  location: string;
  play_time: number;
  content: string;
  place: string;
  host: string[];
}

interface Props extends ITitle, IInfo {}

const Detail = () => {
  return (
    <BaseLayout>
      <Header>
        <Container>
          <Title />
        </Container>
      </Header>
      <Main>
        <Container>
          <Info />
        </Container>
      </Main>
    </BaseLayout>
  );
};

export default Detail;

const Header = styled.header`
  position: relative;
  height: 176px;
  background-color: #d9d9d9;
`;

const Main = styled.main``;
