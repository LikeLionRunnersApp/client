import { useCallback } from 'react'

const useDate = (): string[] => {
  const handleFormatedDate = useCallback(() => {
    const today: Date = new window.Date()
    const year: string = `${today.getFullYear()}`
    const month: number = today.getMonth() + 1 // 월은 0부터 시작하므로 1을 더해줍니다.
    const day: number = today.getDate()
    const hours: string = String(today.getHours()).padStart(2, '0')
    const minutes: string = String(today.getMinutes()).padStart(2, '0')

    const formattedMonth: string = month < 10 ? `0${month}` : `${month}`
    const formattedDay: string = day < 10 ? `0${day}` : `${day}`
    const currentTime: string = `${hours}${minutes}`
    return [year, formattedMonth, formattedDay, currentTime]
  }, [])

  return handleFormatedDate()
}

export default useDate
