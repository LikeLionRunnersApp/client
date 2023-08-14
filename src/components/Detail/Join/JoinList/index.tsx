import styled from "@emotion/styled";

const JoinList = () => {
  return (
    <Container>
      <Circle>
        <span>우</span>
      </Circle>
      <Name>우기몬</Name>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 18px;
  
  &:last-of-type {
    margin-right: 0;
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #ff9704;
  margin-bottom: 4px;
`;

const Name = styled.strong`
  opacity: 0.5;
  font-size: 9px;
`;

export default JoinList;
