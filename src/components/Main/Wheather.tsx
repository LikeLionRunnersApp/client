import { useEffect, useState } from 'react'
import GlobalThemeProvider from '@assets/styles/GlobalThemeProvider'
import axios from 'axios'
import theme from '@assets/styles/theme'
import useDate from '@hooks/useDate'
import styled from '@emotion/styled'
import { Wheathers } from '@assets/images/wheather/index'

interface Params {
  serviceKey: string
  pageNo: string
  numOfRows: string
  dataType: string
  base_date: string
  base_time: string
  nx: string
  ny: string
}

interface WheatherProps {
  color: keyof typeof theme.palette
}

const Wheather = () => {
  const [wheather, setWheather] = useState('')
  const [wheatherImage, setWheatherImage] = useState('')

  const todayDate = useDate()

  const year = todayDate[0]
  const month = todayDate[1]
  const day = todayDate[2]
  const currentTime = todayDate[3]
  const formattedDate: string = `${year}${month}${day}`

  const handleTodayWheather = (PTY: number, SKY: number) => {
    if (PTY === 1) {
      setWheather('비!')
      setWheatherImage(Wheathers.rain)
    } else if (PTY === 3) {
      setWheather('눈!')
      setWheatherImage(Wheathers.snow)
    } else if (PTY === 0 && SKY >= 0 && SKY <= 5) {
      setWheather('맑음!')
      setWheatherImage(Wheathers.sun)
    } else if (PTY === 0 && SKY >= 6 && SKY <= 8) {
      setWheather('구름 많음!')
      setWheatherImage(Wheathers.cloud)
    } else if (PTY === 0 && SKY >= 9 && SKY <= 10) {
      setWheather('흐림!')
      setWheatherImage(Wheathers.blur)
    }
  }

  useEffect(() => {
    const getWheather = async () => {
      const url =
        'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst'

      const params: Params = {
        serviceKey:
          'PdHhB7W9q2RyINdmlCb3pgDiKjNIZh5o5TezfsUzyWsVB0cpPYhZF1nWX45p1mzNIRkNw25QtVpt9CdKuRIzbA==',
        pageNo: '1',
        numOfRows: '1000',
        dataType: 'JSON',
        base_date: formattedDate,
        base_time:
          parseInt(currentTime[2]) < 3
            ? `${currentTime[0]}${parseInt(currentTime[1]) - 1}30`
            : `${currentTime[0]}${currentTime[1]}30`,
        nx: '67',
        ny: '101',
      }
      const res = await axios.get(url, { params })
      const PTY = parseInt(res.data.response.body.items.item[6].fcstValue)
      const SKY = parseInt(res.data.response.body.items.item[18].fcstValue)
      handleTodayWheather(PTY, SKY)
    }
    getWheather()
  }, [])

  return (
    <GlobalThemeProvider>
      <WheatherContainer color="yellow">
        <WheatherContent>
          <dt>오늘의 날씨</dt>
          <dd>{wheather}</dd>
        </WheatherContent>
        <WheatherImage>
          <img src={wheatherImage} alt={wheather} />
        </WheatherImage>
      </WheatherContainer>
    </GlobalThemeProvider>
  )
}

export default Wheather

const WheatherContainer = styled.div<WheatherProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 109px;
  height: 44px;
  background-color: ${({ color, theme }) => theme.palette[color]};
  border-radius: 8px;
  padding: 11px 8px;
  font-family: 'JGaegujaengyi-Medium-KO';
`

const WheatherContent = styled.dl`
  & dt {
    font-weight: 800;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 5px;
  }

  & dd {
    font-size: 10px;
    font-weight: 300;
    line-height: 10px;
  }
`

const WheatherImage = styled.div``
