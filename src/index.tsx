import ReactDOM from 'react-dom/client'
import App from './App'

import { Global } from '@emotion/react'
import GlobalStyle from './assets/styles/GlobalStyle'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Global styles={GlobalStyle} />
      <App />
    </BrowserRouter>
  </Provider>,
)
