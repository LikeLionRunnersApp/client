import Main from '@pages/Main'
import Detail from '@pages/Detail'
import Login from '@pages/Login'

import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
