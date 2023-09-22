import styled from '@emotion/styled'

import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  variant?: 'main'
}

const BaseLayout = ({ children, variant }: Props) => {
  return <Container variant={variant}>{children}</Container>
}

export default BaseLayout

const Container = styled.div<{ variant: 'main' | 'detail' | undefined }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 375px;
  height: 100vh;
  background-color: ${({ variant }) =>
    variant === 'main' ? '#f5f5f5' : '#fff'};
  overflow: hidden;
`
