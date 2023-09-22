import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchGetKakaoAccessToken } from '@api/oauth'

const KakaoCallback = () => {
  const location = useLocation()
  const code = location.search.split('=')[1]

  useEffect(() => {
    const fetchLoginKakao = async () => {
      const grant_type = 'authorization_code'
      const client_id = `${process.env.REACT_APP_RESTAPI_KAKAO_APP_KEY}`
      const REDIRECT_API = `${process.env.REACT_APP_REDIRECT_URI}`

      const kakaoAccessToken = await fetchGetKakaoAccessToken(
        grant_type,
        client_id,
        REDIRECT_API,
        code,
      )
      // KakaoAccessToken => JWT / ""
      // JWT => localStorage(token) => Home
      // "" => localStorage(token) => SignUp2
      console.log(kakaoAccessToken)
    }
    fetchLoginKakao()
  }, [])

  return <></>
}

export default KakaoCallback
