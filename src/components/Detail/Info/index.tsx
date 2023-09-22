import styled from '@emotion/styled'

import DetailInfo from './DetailInfo'
import DetailDescription from './DetailDescription'

const Info = () => {
  return (
    <Container>
      <DetailInfo />
      <DetailDescription />
    </Container>
  )
}

const Container = styled.div`
  margin-top: 11px;
  margin-bottom: 16px;
`

export default Info
