import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')

  const PORT = import.meta.env.VITE_PORT

  const handleSubmit = e => {
    e.preventDefault()
    fetch(`http://localhost:${PORT}/`, {
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
      <h1 className='text-2xl m-2 p-2'>Chat50</h1>
      <form onSubmit={handleSubmit}>
        <textarea 
          type='text'
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder='Type your message here'
          className='w-full h-32 border border-gray-300 rounded py-2 px-4 mb-4 leading-tight focus:outline-none focus:border-blue-500'
          />
        <button 
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          type='submit'>Send</button>
      </form>
      <div className='mt-8'>
        {response && <p>{response}</p>}
      </div>

    </div>
  )
}

export default App
