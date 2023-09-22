import styled from '@emotion/styled'
import { Icons } from '@assets/images/Icon'

interface Props {
  name:
    | 'alert'
    | 'hamberger'
    | 'edit'
    | 'share'
    | 'prev'
    | 'smDefaultCheering'
    | 'smClickCheering'
    | 'lgDefaultCheering'
    | 'lgClickCheering'
  on?: boolean
  onClick?: () => {}
}

const Icon = ({ name, onClick, on = false, ...props }: Props) => {
  return (
    <IconWrapper {...props}>
      <IconImage src={Icons[name]} on={on} />
    </IconWrapper>
  )
}

export default Icon

const IconWrapper = styled.i`
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
`

const IconImage = styled.img<{ on: boolean }>`
  transform: rotate(${({ on }) => (on ? '90deg' : '0deg')});
`
