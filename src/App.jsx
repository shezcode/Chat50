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
    <div className="App">
      <h1 className='text-white'>Chat50</h1>
      <form onSubmit={handleSubmit}>
        <textarea 
          type='text'
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder='Type your message here'
          
          />
        <button type='submit'>Send</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  )
}

export default App
