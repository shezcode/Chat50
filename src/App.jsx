import { useState } from 'react'
import './App.css'
import {Route, Routes, Link} from 'react-router-dom'

import NavWaves from '../components/NavWaves'
import Navbar from '../components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <NavWaves />
    </div>
    
  )
}

export default App
