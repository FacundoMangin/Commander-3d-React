import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Portada from './components/Portada'
import ResinaFilamento from './components/ResinaFilamento'
import Router from './components/routes/Router'
import './components/css/main.css';


function App() {

  return (
    <>
      <Router/>
    </>
  )
}

export default App
