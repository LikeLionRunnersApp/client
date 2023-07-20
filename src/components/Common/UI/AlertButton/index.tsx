import alertButton from "../../../../assets/images/alertButton.svg";
import styled from "@emotion/styled";

const AlertButton = () => {
  return (
    <Button>
      <img src={alertButton} alt="alert button" />
    </Button>
  );
};

export default AlertButton;

const Button = styled.button`
  padding: 11px 9px;
  cursor: pointer;
  background-color: transparent;
`;
