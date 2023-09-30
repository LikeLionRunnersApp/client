import styled from '@emotion/styled'

import { BaseLayout, Container } from '@components/common'
import {
  Date,
  Wheather,
  Slide,
  Calendar,
  RecruitmentList,
} from '@components/home'
import headerBackgroundImage from '@assets/images/Main/bg.png'
import run from '@assets/images/Main/run.svg'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchGetRecruitmentList } from '@/apis/home'

const Main = () => {
  const [date, setDate] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    !token && navigate('/signin')
  }, [])

  const weeks = [
    {
      id: '1',
      flag: 'interval',
      image: '',
      title: '뉴비 환영!! 아기사자 모여라',
      totalMember: 6,
      joinMember: 3,
      play_time: 40,
      location: '장대동 학사마을 다리 밑',
      time: '22:00',
      status: 'start',
    },
    {
      id: 2,
      flag: 'interval',
      image: '',
      title: '뉴비 환영!! 아기사자 모여라',
      totalMember: 6,
      joinMember: 3,
      play_time: 40,
      location: '장대동 학사마을 다리 밑',
      time: '22:00',
      status: 'start',
    },
    {
      id: 3,
      flag: 'interval',
      image: '',
      title: '뉴비 환영!! 아기사자 모여라',
      totalMember: 6,
      joinMember: 3,
      play_time: 40,
      location: '장대동 학사마을 다리 밑',
      time: '22:00',
      status: 'start',
    },
    {
      id: 4,
      flag: 'interval',
      image: '',
      title: '뉴비 환영!! 아기사자 모여라',
      totalMember: 6,
      joinMember: 3,
      play_time: 40,
      location: '장대동 학사마을 다리 밑',
      time: '22:00',
      status: 'start',
    },
    {
      id: 5,
      flag: 'interval',
      image: '',
      title: '뉴비 환영!! 아기사자 모여라',
      totalMember: 6,
      joinMember: 3,
      play_time: 40,
      location: '장대동 학사마을 다리 밑',
      time: '22:00',
      status: 'start',
    },
    {
      id: 6,
      flag: 'interval',
      image: '',
      title: '뉴비 환영!! 아기사자 모여라',
      totalMember: 6,
      joinMember: 3,
      play_time: 40,
      location: '장대동 학사마을 다리 밑',
      time: '22:00',
      status: 'start',
    },
    {
      id: 7,
      flag: 'interval',
      image: '',
      title: '뉴비 환영!! 아기사자 모여라',
      totalMember: 6,
      joinMember: 3,
      play_time: 40,
      location: '장대동 학사마을 다리 밑',
      time: '22:00',
      status: 'start',
    },
    {
      id: 8,
      flag: 'interval',
      image: '',
      title: '뉴비 환영!! 아기사자 모여라',
      totalMember: 6,
      joinMember: 3,
      play_time: 40,
      location: '장대동 학사마을 다리 밑',
      time: '22:00',
      status: 'start',
    },
  ]

  const handleGetAsync = async (currentDate: string) => {
    setDate(currentDate)
    const res = await fetchGetRecruitmentList(date)
    console.log(res)
  }

  return (
    <BaseLayout variant="main">
      <Header image={headerBackgroundImage}>
        <Container>
          <FlexContainer>
            <Date />
            <Wheather />
          </FlexContainer>
          <Slide />
        </Container>
      </Header>
      <MainContainer>
        <Container>
          <div>
            <Title image={run}>모집 중인 뛰슈</Title>
            <Calendar onGetAsync={handleGetAsync} />
          </div>
          <RecruitmentList weeks={weeks} date={date} />
        </Container>
      </MainContainer>
    </BaseLayout>
  )
}

export default Main

const Header = styled.header<{ image: string }>`
  padding-top: 31px;
  padding-bottom: 12px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ image }) => image});
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

const MainContainer = styled.main`
  padding-top: 16px;
`

const Title = styled.h1<{ image: string }>`
  display: flex;
  font-size: 14px;
  align-items: center;
  margin-bottom: 25px;

  &::after {
    content: '';
    display: block;
    width: 22px;
    height: 13px;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 4px;
  }
`
