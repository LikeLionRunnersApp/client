import styled from '@emotion/styled'

import Flag from '@components/Common/UI/Flag'

const SlideItem = ({ item }: any) => {
  return (
    <ItemContainer>
      <Flag type={item.flag} />
      <div>
        <Title>{item.title}</Title>
        <Date>
          {item.date} / {item.time}
        </Date>
      </div>
      <CurrentDateContainer>
        <span>시작까지</span>
        <strong>{`00:19:32`}</strong>
      </CurrentDateContainer>
    </ItemContainer>
  )
}

export default SlideItem

const ItemContainer = styled.div`
  position: relative;
  background-color: #ff9704;
  border-radius: 8px;
  padding: 12px 16px;
  cursor: grab;
`

const Title = styled.h2`
  font-size: 14px;
  font-weight: 700;
  margin-top: 4px;
  margin-bottom: 2px;
`

const Date = styled.span`
  display: block;
  font-size: 9px;
  font-weight: 400;
  opacity: 0.5;
`

const CurrentDateContainer = styled.div`
  position: absolute;
  right: 16px;
  bottom: 4px;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;

  & span {
    margin-right: 4px;
  }

  & strong {
    font-size: 24px;
    font-weight: 700;
  }
`
