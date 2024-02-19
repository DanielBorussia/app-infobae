import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId="697114604570-eklbc1ckueojbmula6pg3eu3r037mip8.apps.googleusercontent.com">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GoogleOAuthProvider>
)
