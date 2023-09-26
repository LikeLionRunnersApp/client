import { Detail, SignIn, SignUp, Home, FindUser } from '@pages/index'
import { Routes, Route } from 'react-router-dom'
import KakaoCallback from '@components/SignIn/KakaoCallback'
import {
  Success,
  LoginCredentialsInput,
  UserProfileInput,
} from '@components/SignUp/'
import { FindPw, ResetPw } from '@/components/FindUser/'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />}>
        <Route path="1" element={<LoginCredentialsInput />} />
        <Route path="2" element={<UserProfileInput />} />
        <Route path="3" element={<Success />} />
      </Route>
      <Route path="/find-user" element={<FindUser />}>
        <Route path="1" element={<FindPw />} />
        <Route path="2" element={<ResetPw />} />
      </Route>
      <Route path="/kakaologin/redirect" element={<KakaoCallback />} />
    </Routes>
  )
}

export default Router
