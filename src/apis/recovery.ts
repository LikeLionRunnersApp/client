import instance from '@/apis/instance'

export const fetchGetMemberId = async ({
  name,
  phoneNum,
}: {
  name: string
  phoneNum: string
}): Promise<{ memberId: string }> => {
  const res = await instance.post('/findMemberId', { name, phoneNum })
  return res.data
}

export const fetchAuthSend = async ({
  memberId,
  name,
  phoneNum,
}: {
  memberId: string
  name: string
  phoneNum: string
}): Promise<{ ok: boolean }> => {
  const res = await instance.post('/auth-send', { memberId, name, phoneNum })
  return res.data
}

export const fetchAuthCheck = async ({
  memberId,
  authCode,
}: {
  memberId: string
  authCode: string
}): Promise<{ ok: boolean }> => {
  const res = await instance.post('/auth-check', {
    memberId,
    authCode,
  })
  return res.data
}

export const fetchResetPassword = async ({
  memberId,
  password,
}: {
  memberId: string
  password: string
}): Promise<{ ok: boolean }> => {
  const res = await instance.patch('/resetPassword', {
    memberId,
    password,
  })
  return res.data
}
