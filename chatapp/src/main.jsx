import { BrowserRouter } from 'react-router-dom'
import { ReactDOM } from 'react-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)