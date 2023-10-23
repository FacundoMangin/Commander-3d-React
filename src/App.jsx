import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './app.css'

import Router from './components/routes/Router'
import './components/css/main.css';

import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "./components/context/ThemeContextProvider.tsx";



function App() {
  const { theme } = useThemeContext();
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router/>
    </ThemeProvider>
  )
}

export default App
