import instance from '@/api/instance'
import { User, UserInfo } from '@types/'

export const fetchLogin = async ({
  memberId,
  password,
}: User<string>): Promise<{ token: string }> => {
  const res = await instance.post('/login', {
    memberId,
    password,
  })
  return res.data
}

export const fetchSignUp = async ({
  memberId,
  phoneNum,
  password,
  name,
}: UserInfo<string>): Promise<{ ok: boolean }> => {
  const res = await instance.post('/sign-up', {
    memberId,
    phoneNum,
    password,
    name,
  })
  return res.data
}

export const fetchMemberIdDuplicated = async (
  memberId: string,
): Promise<{ ok: boolean }> => {
  const res = await instance.post('/checkDuplicateMemberId', {
    memberId,
  })
  return res.data
}
