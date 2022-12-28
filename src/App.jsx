import { useState } from 'react'
import './App.css'
import {Route, Routes, Link} from 'react-router-dom'
import { Chat } from '../components/Chat'
import Home from '../components/Home'

function App() {
  return (
    <div>
      <nav className='p-8 bg-black'>
        <ul className='flex flex-row justify-start items-center pl-40 gap-10'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li className='p-2 m-2 bg-green-500 rounded-md text-black'>
            <Link to='/chat'>Chat</Link>
          </li>
          <li>

          </li>

        </ul>
      </nav>
      <Routes>
        <Route path='/chat' element={<Chat />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
