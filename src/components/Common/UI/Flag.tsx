import styled from '@emotion/styled'

interface Props {
  type: 'interval' | 'run' | 'work'
}

export const flagType = {
  interval: {
    content: '인터벌',
    color: '#FFC573',
  },
  run: {
    content: '뛰슈',
    color: '#FFE76A',
  },
  work: {
    content: '걷슈',
    color: '#D9D9D9',
  },
}

const Flag = ({ type, ...props }: Props) => {
  return (
    <FlagContainer type={type} {...props}>
      {flagType[type].content}
    </FlagContainer>
  )
}

export default Flag

const FlagContainer = styled.div<{ type: 'interval' | 'run' | 'work' }>`
  display: inline-block;
  padding: 3px 6px;
  font-size: 9px;
  font-weight: 700;
  color: #ff9704;
  background-color: ${({ type }) => flagType[type].color};
  border-radius: 31px;
`
