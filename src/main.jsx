import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MetarProvider } from './context/Metar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MetarProvider>
      <App />
    </MetarProvider>
  </React.StrictMode>,
)
