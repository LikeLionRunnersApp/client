import styled from '@emotion/styled'
import useDate from '@hooks/useDate'
import { useState } from 'react'

const moveDayToFront = () => {
  const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일']
  const today = new Date()
  const todayOfweek = daysOfWeek[today.getDay()]
  const dayIndex = daysOfWeek.indexOf(todayOfweek) - 1

  if (dayIndex === -1) {
    console.log(`${todayOfweek}은(는) 배열에 존재하지 않는 요일입니다.`)
    return daysOfWeek
  }

  const movedArray = [
    ...daysOfWeek.slice(dayIndex),
    ...daysOfWeek.slice(0, dayIndex),
  ]
  return movedArray
}

const sevenDays = () => {
  const today = new Date()

  const days = []
  for (let i = 0; i < 7; i++) {
    const nextDay = today.getDate() + i > 31 ? 1 : today.getDate() + i
    days.push(`${nextDay}`)
  }

  return days
}

interface Props {
  onGetAsync(currentDate: string): void
}

const Calendar = ({ onGetAsync }: Props) => {
  const [index, setIndex] = useState(0)
  const shiftedDaysOfWeek = moveDayToFront()
  const nextSevenDays = sevenDays()
  const [year, formattedMonth] = useDate()

  let weekCalendar = []
  for (let i = 0; i < 7; i++) {
    const item = {
      idx: i,
      week: shiftedDaysOfWeek[i],
      day: nextSevenDays[i],
    }
    weekCalendar.push(item)
  }

  const clickCalendarHandler = (idx: number, day: string) => {
    onGetAsync(`${year}-${formattedMonth}-${day}`)
    setIndex(idx)
  }

  return (
    <Container>
      {weekCalendar.map(week => (
        <>
          <Week
            key={week.idx}
            onClick={() => clickCalendarHandler(week.idx, week.day)}
            index={index}
          >
            <dt>{week.week}</dt>
            <dd>{week.day}</dd>
          </Week>
        </>
      ))}
    </Container>
  )
}

export default Calendar

const Container = styled.dl`
  padding: 0px 12px;
  font-family: 'JGaegujaengyi-Medium-KO';
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  dt {
    margin-bottom: 8px;
  }

  dd {
    margin: 0;
  }
`

const Week = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  cursor: pointer;

  &:nth-of-type(${({ index }) => index + 1}) {
    opacity: 100%;
    font-weight: 700;
  }
`
