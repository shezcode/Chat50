import { useState } from 'react'
import './App.css'
import {Route, Routes, Link} from 'react-router-dom'
import { Chat } from '../components/Chat'
import Home from '../components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup'

function App() {
  return (
    <div>
      <nav className='p-8 bg-black flex flex-row justify-between items-center'>
        <ul className='flex justify-start items-center pl-40 gap-10'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li className='p-2 m-2 bg-green-500 rounded-md text-black'>
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
