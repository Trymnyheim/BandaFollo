import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HolidayProvider from './utils/HolidayContext.jsx';
import { AuthProvider } from './utils/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <HolidayProvider>
      <App />
    </HolidayProvider>
    </AuthProvider>
  </React.StrictMode>,
)
