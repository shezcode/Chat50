import { useState } from 'react'
import './App.css'
import {Route, Routes, Link} from 'react-router-dom'
import { Chat } from '../components/Chat'
import Home from '../components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup'
import NavWaves from '../components/NavWaves'

function App() {
  return (
    <div>
      <nav className='p-8 bg-secondary flex flex-row justify-between items-center relative '>
        <div class="custom-shape-divider-top-1672333763">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
            </svg>
        </div>
        <ul className='flex justify-start items-center pl-40 gap-10'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li className='p-2 m-2 bg-primary rounded-md text-secondary'>
            <Link to='/chat'>Chat</Link>
          </li>
        </ul>
        <ul className='flex justify-end items-center pr-20 gap-10'>
          <li className='flex j'>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/signup'>Signup</Link>
          </li>
        </ul>

      </nav>
      <NavWaves />
      <Routes>
        <Route path='/chat' element={<Chat />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />}/> 
        <Route path='/signup' element={<Signup />}/> 
      </Routes>

    </div>
    
  )
}

export default App
