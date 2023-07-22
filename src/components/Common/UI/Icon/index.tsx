import styled from "@emotion/styled";
import { Icons } from "@assets/images/Icon";

interface Props {
  name: string;
  width?: string;
  height?: string;
  on: boolean;
  onClick?: () => {};
}

const Icon = ({
  name,
  width,
  height,
  onClick,
  on = false,
  ...props
}: Props) => {
  return (
    <IconWrapper {...props}>
      <IconImage src={Icons[name]} width={width} height={height} on={on} />
    </IconWrapper>
  );
};

export default Icon;

const IconWrapper = styled.i`
  box-sizing: borde-box;
  display: inline-block;
  cursor: pointer;
`;

const IconImage = styled.img<{ width?: string; height?: string; on: boolean }>`
  transform: rotate(${({ on }) => (on ? "90deg" : "0deg")});
`;
