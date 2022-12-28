import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [messages, setMessages] = useState([])
  const [responses, setResponses] = useState([])



  const PORT = 3001

  const handleSubmit = e => {
    e.preventDefault()
    fetch(`http://localhost:${PORT}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    })
      .then(res => res.json())
      .then(data => setResponse(data.message))
    setMessages([...messages, message])
    setMessage('')
    setResponses([...responses, response])
    console.log(messages)
  }

  return (
    <div className='h-full flex flex-col justify-center'>
      <h1 className='text-2xl mt-8 p-2 text-green-500 text-center'>Chat50</h1>
      <div>
        <p className='text-green-500 m-4 ml-20 bg-black w-40 text-center rounded-md p-2'>Messages</p>
        {messages.map((msg, i) => {
          return (<p key={i} className='text-green-500 m-4 bg-gray-800 p-10'>{msg}</p>)
        })}
        {response && responses.map((res, i) => {
          return (<p key={i} className='text-green-500 m-4 bg-gray-800 p-10'>{res}</p>) 
        }
        )}
      </div>


      <form onSubmit={handleSubmit} className='flex justify-center items-center flex-row form'>
        <textarea 
          type='text'
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder='...'
          className='w-1/2 h-32 flex justify-center items-center border border-gray-300 rounded py-4 px-4 mb-4 leading-tight focus:outline-none focus:border-green-500 '
          />
        <button 
          className='bg-green-500 hover:bg-green-700 font-bold py-2 px-4 rounded m-8 text-black'
          type='submit'>Send</button>
      </form>

    </div>
  )
}

export default App
