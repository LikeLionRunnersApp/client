import instance from '@api/index'
import { User, UserInfo } from 'types/index'

export const fetchLogin = async ({
  memberId,
  password,
}: User<string>): Promise<{ token: string } | undefined> => {
  try {
    const res = await instance.post('/login', {
      memberId,
      password,
    })
    if (res.status === 401) {
      return undefined
    }
    return res.data
  } catch (err) {
    console.error(err)
  }
}

export const fetchSignUp = async ({
  memberId,
  phoneNum,
  password,
  name,
}: UserInfo<string>): Promise<{ signUpResult: string }> => {
  const res = await instance.post('/sign-up', {
    memberId,
    phoneNum,
    password,
    name,
  })
  return res.data
}
