import Main from '@pages/Main'
import Detail from '@pages/Detail'
import SignIn from '@pages/SignIn'
import { Routes, Route } from 'react-router-dom'
import SignUp from '@pages/SignUp'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default Router
