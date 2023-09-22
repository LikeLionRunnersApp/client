import ReactDOM from 'react-dom/client'
import App from './App'

import { Global } from '@emotion/react'
import GlobalStyle from '@assets/styles/GlobalStyle'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Global styles={GlobalStyle} />
    <App />
  </BrowserRouter>,
)
