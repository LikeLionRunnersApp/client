import styled from '@emotion/styled'

import DetailInfo from '@components/Detail/Info/DetailInfo'
import DetailDescription from '@components/Detail/Info/DetailDescription'

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
