import { Recruitment } from '@/types'
import instance from './instance'

export const fetchGetRecruitmentList = async (
  date: string,
): Promise<Recruitment[]> => {
  const res = await instance.get(`/week/${date}`)
  return res.data
}
