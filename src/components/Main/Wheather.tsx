import { useEffect, useState } from 'react'
import GlobalThemeProvider from '@assets/styles/GlobalThemeProvider'
import theme from '@assets/styles/theme'
import useDate from '@hooks/useDate'
import styled from '@emotion/styled'
import { Wheathers } from '@assets/images/wheather/index'
import { fetchGetWheather } from '@/api/wheather'

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
      const { PTY, SKY } = await fetchGetWheather({
        formattedDate,
        currentTime,
      })
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
