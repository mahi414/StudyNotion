import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}>
      <App />
      <Toaster/>
    </BrowserRouter>
  </StrictMode>
)
