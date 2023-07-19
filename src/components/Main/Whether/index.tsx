import theme from "../../../assets/styles/theme";
import styled from "@emotion/styled";

interface WhetherProps {
  color: keyof typeof theme.palette;
}

const Whether = () => {
  return (
    <WhetherContainer color="yellow">
      <WhetherContent>
        <dt>오늘의 날씨</dt>
        <dd>맑음!</dd>
      </WhetherContent>
      <WhetherImage>이미지</WhetherImage>
    </WhetherContainer>
  );
};

export default Whether;

const WhetherContainer = styled.div<WhetherProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 109px;
  height: 44px;
  background-color: ${({ color, theme }) => theme.palette[color]};
  border-radius: 8px;
  padding: 11px 8px;
  font-family: "JGaegujaengyi-Medium-KO";
`;

const WhetherContent = styled.dl`
  & dt {
    font-weight: 800;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 5px;
  }

  & dd {
    font-size: 10px;
    font-weight: 300;
    line-height: 10px;
  }
`;

const WhetherImage = styled.div``;
