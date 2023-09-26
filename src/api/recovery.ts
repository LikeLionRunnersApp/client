import instance from '@api/index'

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
