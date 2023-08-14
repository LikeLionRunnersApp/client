import styled from "@emotion/styled";
import { Flag } from "@components/Common/UI";
import { ITitle } from "@pages/Detail";

const Title = () => {
  return (
    <TitleContainer>
      <Flag type="interval" />
      <TitleContent>뉴비 환영!! 아기사자 모여라</TitleContent>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  position: absolute;
  bottom: 12px;
  left: 16px;

  & div:first-of-type {
    margin-bottom: 8px;
  }
`;

const TitleContent = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

export default Title;
