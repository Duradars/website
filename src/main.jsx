import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Router>
    <App />
    </Router>
  </React.Fragment>,

)
