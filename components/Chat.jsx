import { useState } from "react";

export const Chat = () => {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [msg, setMsg] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const PORT = 3001

  //create a handle submit function that will send the message to the server, and then set the response to the message that the server sends back, and then set the message to an empty string

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:${PORT}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ conversation: createConversation(message) })
    })
      .then(res => res.json())
      .then(data => {
        setIsLoading(true)
        setResponse(data.message)
        setMsg([...msg, message, data.message])
        setMessage('')
      })
      setIsLoading(false)
  }

  const createConversation = (prompt) => {
    let conversation = ''
    for (let i = 0; i < msg.length; i++) {
      if (i % 2 === 0) {
        conversation += `Me: ${msg[i]} \n`
      }
      else {
        conversation += `You: ${msg[i]} \n`
      }
    }
    return conversation + `Me: ${prompt}`
  }


  return (
    <div className='h-full flex flex-col justify-center'>
      <h1 className='text-2xl mt-8 p-2 text-green-500 text-center'>Chat50</h1>
      <div>
        <p className='text-green-500 m-4 ml-32 bg-black w-40 text-center rounded-md p-2'>Chat history</p>
        {msg.map((msg, i) => {
          if (i % 2 === 0) {
            return (
              <div key={i} className='flex flex-row justify-end mr-8'>
                <p key={i} className='bg-green-500 text-black p-2 rounded-md m-4'>{msg}</p>
              </div>
            )
          } else {
            return (
              <div key={i} className='flex flex-row justify-start ml-8'>
                <p key={i} className='bg-black text-green-500 p-2 rounded-md m-4'>{msg}</p>
              </div>
            )
          }
        })}
        {!isLoading && <p className='text-green-500 m-4 ml-20 bg-black w-40 text-center rounded-md p-2'>Loading...</p>}
      </div>
      {/* create an empty div to fill the remaining space*/}
      <div className='h-80'></div>
      <form onSubmit={handleSubmit} className='flex justify-center items-center flex-row  form'>
        <textarea 
          type='text'
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder='...'
          className='w-1/2 h-32 flex justify-center items-center border border-gray-300 rounded py-4 px-4 mb-4∂ focus:outline-none focus:border-green-500 '
          />
        <button 
          className='bg-green-500 hover:bg-green-700 font-bold py-2 px-4 rounded m-8 text-black'
          type='submit'>Send</button>
      </form>
    </div>
  )
}