import instance from '@/apis/instance'

export const loginWithKakao = () => {
  const CLIENT_ID = `${import.meta.env.REACT_APP_RESTAPI_KAKAO_APP_KEY}`
  const REDIRECT_ID = `${import.meta.env.REACT_APP_REDIRECT_URI}`

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_ID}&response_type=code`

  window.location.href = KAKAO_AUTH_URL
}

export const fetchGetKakaoAccessToken = async (
  grant_type: string,
  client_id: string,
  REDIRECT_URI: string,
  code: string | null,
) => {
  const URI = `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${code}`

  const KakaoAccessToken = (
    await instance.post(
      URI,
      {},
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      },
    )
  ).data.access_token

  return KakaoAccessToken
}

export const fetchMemberCheck = async (
  kakaoAccessToken: string,
): Promise<{ token: string }> => {
  const res = await instance.post('/kakao/MemberCheck', {
    accessToken: kakaoAccessToken,
  })

  return res.data
}

export const fetchKakaoSignup = async ({
  name,
  phoneNum,
  accessToken,
}: {
  name: string
  phoneNum: string
  accessToken: string
}): Promise<{ token: string }> => {
  const res = await instance.post('/kakao/SignUp', {
    name,
    phoneNum,
    accessToken,
  })

  return res.data
}
