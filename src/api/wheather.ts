import axios from 'axios'
import { Params } from '@types'

export const fetchGetWheather = async ({
  formattedDate,
  currentTime,
}: {
  formattedDate: string
  currentTime: string
}): Promise<{ PTY: number; SKY: number }> => {
  const url = `${import.meta.env.REACT_APP_WHEATHER_URI}`
  const params: Params = {
    serviceKey: `${import.meta.env.REACT_APP_WHEATHER_KEY}`,
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

  return {
    PTY: parseInt(res.data.response.body.items.item[6].fcstValue),
    SKY: parseInt(res.data.response.body.items.item[18].fcstValue),
  }
}
