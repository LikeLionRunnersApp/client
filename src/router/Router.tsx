import Detail from '@pages/Detail'
import SignIn from '@pages/SignIn'
import { Routes, Route } from 'react-router-dom'
import SignUp from '@pages/SignUp'
import Home from '@pages/Home'
import KakaoCallback from '@components/SignIn/KakaoCallback'
import LoginCredentialsInput from '@components/SignUp/LoginCredentialsInput'
import UserProfileInput from '@components/SignUp/UserProfileInput'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />}>
        <Route path="1" element={<LoginCredentialsInput />} />
        <Route path="2" element={<UserProfileInput />} />
      </Route>
      <Route path="/kakaologin/redirect" element={<KakaoCallback />} />
    </Routes>
  )
}

export default Router
