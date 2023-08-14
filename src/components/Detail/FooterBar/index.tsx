import styled from "@emotion/styled";
import { Button } from "@components/Common/UI";

const FooterBar = () => {
  return (
    <FooterBarContainer>
      <Container>
        <Button type="button" variant="participation" size="lg">
          참여하기
        </Button>
      </Container>
    </FooterBarContainer>
  );
};

const FooterBarContainer = styled.div`
  position: fixed;
  bottom: 0;
`;

const Container = styled.div`
  width: 375px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.1);
`;

export default FooterBar;
