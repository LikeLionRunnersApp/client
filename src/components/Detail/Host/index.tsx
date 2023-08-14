import styled from "@emotion/styled";

const Host = () => {
  return (
    <Container>
      <Circle>
        <span>강</span>
      </Circle>
      <Name>강기봉</Name>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0px 8px 24px;
  border-top: 2px solid #f5f5f5;
  border-bottom: 4px solid #f5f5f5;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  border: 2px solid #ff9704;
  margin-right: 8px;
`;

const Name = styled.strong`
  opacity: 0.5;
  font-size: 12px;
`;

export default Host;
