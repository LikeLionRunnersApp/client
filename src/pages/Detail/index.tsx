import { BaseLayout } from "@components/Common";
import Title from "@components/Detail/Title";

import styled from "@emotion/styled";

export interface ITitle {
  flag: "interval" | "run" | "work";
  title: string;
}

interface Props extends ITitle {}

const Detail = () => {
  return (
    <BaseLayout>
      <Header>
        <Title />
      </Header>
      <Main>
        <div></div>
      </Main>
    </BaseLayout>
  );
};

export default Detail;

const Header = styled.header`
  position: relative;
  height: 176px;
  padding: 12px 16px;
  background-color: #d9d9d9;
`;

const Main = styled.main``;
