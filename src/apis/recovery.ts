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

export const fetchSendAuth = async ({
  memberId,
  name,
  phoneNum,
}: {
  memberId: string
  name: string
  phoneNum: string
}): Promise<{ authCode: string; token?: string }> => {
  const res = await instance.post('/sendAuthCode', { memberId, name, phoneNum })
  return res.data
}

export const fetchResetPassword = async ({
  token,
  password,
}: {
  token: string
  password: string
}): Promise<{ ok: boolean }> => {
  const res = await instance.post('/resetPassword', {
    token,
    password,
  })
  return res.data
}
