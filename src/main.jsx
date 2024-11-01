
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import App from './App.jsx'
import './css/style.css'
import './css/satoshi.css'
import { UserProvider } from './hooks/UserContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <UserProvider>
      <App /></UserProvider>
    </Router>
  </React.StrictMode>,
)
