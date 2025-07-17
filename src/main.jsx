import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HolidayProvider from './utils/HolidayContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HolidayProvider>
      <App />
    </HolidayProvider>
  </React.StrictMode>,
)
