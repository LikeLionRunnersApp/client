import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchGetKakaoAccessToken, fetchMemberCheck } from '@apis/oauth'

const KakaoCallback = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const code = location.search.split('=')[1]

  useEffect(() => {
    const fetchLoginKakao = async () => {
      const grant_type = 'authorization_code'
      const client_id = `${import.meta.env.REACT_APP_RESTAPI_KAKAO_APP_KEY}`
      const REDIRECT_API = `${import.meta.env.REACT_APP_REDIRECT_URI}`

      const kakaoAccessToken = await fetchGetKakaoAccessToken(
        grant_type,
        client_id,
        REDIRECT_API,
        code,
      )

      const res = await fetchMemberCheck(kakaoAccessToken)

      if (res.token !== '') {
        localStorage.setItem('token', res.token)
        navigate('/')
      } else {
        navigate('/signup/2', { state: { accessToken: kakaoAccessToken } })
      }
    }
    fetchLoginKakao()
  }, [])

  return <></>
}

export default KakaoCallback
