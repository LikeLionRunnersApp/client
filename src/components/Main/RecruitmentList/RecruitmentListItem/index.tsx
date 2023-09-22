import { useState } from 'react'

import styled from '@emotion/styled'

import { IListIcon, ListIcon } from '@assets/images/ListIcon'

import Flag from '@components/Common/UI/Flag'
import { Icon } from '@components/Common/UI'
import Button from '@components/Common/UI/Button'

import { IWeeks } from '@pages/Home'

interface Props {
  week: IWeeks
  date: string
}

const RecruitmentListItem = ({ week, date }: Props) => {
  const [cheering, setCheering] = useState(false)

  const handleClickCheeringButton = () => {
    setCheering(prev => !prev)
    console.log(cheering)
  }

  return (
    <Container>
      <IconContainer onClick={handleClickCheeringButton}>
        <Icon name="smDefaultCheering" />
      </IconContainer>
      <ButtonContainer>
        <Button type="button" variant={week.status} size="sm">
          {week.status === 'start'
            ? '시작하기'
            : week.status === 'participation'
            ? '참여하기'
            : '신청완료'}
        </Button>
      </ButtonContainer>
      <ImageContainer>
        <img src={week.image} alt={week.title} />
      </ImageContainer>
      <ContentContainer>
        <Header>
          <Flag type={week.flag} />
          <h1>뉴비 환영!! 아기사자 모여라</h1>
        </Header>
        <Detail icon={ListIcon}>
          <dt>personnel</dt>
          <dd>
            {week.joinMember}/{week.totalMember}
          </dd>
          <dt>time</dt>
          <dd>{week.play_time}min</dd>
          <dt>location</dt>
          <dd>{week.location}</dd>
          <dt>date</dt>
          <dd>
            {date} / pm {week.time}
          </dd>
        </Detail>
      </ContentContainer>
    </Container>
  )
}

export default RecruitmentListItem

const Container = styled.div`
  width: 100%;
  padding: 8px;
  position: relative;
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 12px;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

const ImageContainer = styled.div`
  height: 96px;
  width: 96px;
  background-color: #d9d9d9;
  border-radius: 6px;
  margin-right: 8px;
`

const ContentContainer = styled.div``

const Header = styled.div`
  h1 {
    font-size: 12px;
    margin: 0;
    margin-top: 4px;
  }
  margin-bottom: 10px;
`

const Detail = styled.dl<{ icon: IListIcon }>`
  opacity: 50%;
  font-size: 9px;
  margin: 0;

  dt {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
    clip: rect(0, 0, 0, 0);
  }

  dd {
    display: flex;
    align-items: center;
    margin: 0;
    margin-bottom: 5px;
  }

  dd:last-of-type {
    margin-bottom: 0;
  }

  dd::before {
    display: inline-block;
    content: '';
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    width: 9.086px;
    height: 10.571px;
    margin-right: 4px;
  }

  dd:first-of-type {
    display: inline-block;
    width: 50%;
  }

  dd:nth-of-type(2) {
    display: inline-block;
    width: 50%;
  }

  dd:first-of-type:before {
    background-image: url(${({ icon }) => icon.personnel});
  }

  dd:nth-of-type(2):before {
    background-image: url(${({ icon }) => icon.time});
  }

  dd:nth-of-type(3):before {
    background-image: url(${({ icon }) => icon.location});
  }

  dd:last-of-type:before {
    background-image: url(${({ icon }) => icon.date});
  }
`

const ButtonContainer = styled.div`
  position: absolute;
  right: 8px;
  bottom: 8px;
`
