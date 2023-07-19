import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalThemeProvider from './assets/styles/GlobalThemeProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <GlobalThemeProvider>
    <App />
  </GlobalThemeProvider>
)
