import styled from "@emotion/styled";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const BaseLayout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default BaseLayout;

const Container = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 375px;
  height: 100vh;
  border: 1px solid #d9d9d9;
`;
