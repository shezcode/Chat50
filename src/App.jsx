import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  const PORT = 3001

  const handleSubmit = e => {
    e.preventDefault()
    fetch(`http://localhost:${PORT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    })
      .then(res => res.json())
      .then(data => setResponse(data.message))
  }


  return (
    <div>
      <h1 className='text-2xl m-2 p-2 text-green-500'>Chat50</h1>
      <form onSubmit={handleSubmit}>
        <textarea 
          type='text'
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder='Type your message here'
          className='w-full h-32 border border-gray-300 rounded py-2 px-4 mb-4 leading-tight focus:outline-none focus:border-green-500 '
          />
        {response && <p className='text-green-500 m-4'>{response}</p>}
        <button 
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-8 text-black'
          type='submit'>Send</button>
      </form>

    </div>
  )
}

export default App
