import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/theme.scss'
import AppRouter from './routes.tsx'
import { ThemeProvider } from "./context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <ThemeProvider>
    <AppRouter />
   </ThemeProvider>
  </React.StrictMode>,
)
