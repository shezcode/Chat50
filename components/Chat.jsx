import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";

export const Chat = () => {
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('')
  const [msg, setMsg] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const msgEndRef = useRef(null)

  const scrollToBottom = () => {
    msgEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [msg])

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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
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
      <h1 className='text-2xl mt-8 p-2 text-primary text-center'>Chat50</h1>
      <div ref={msgEndRef}>
        <p className='text-primary m-4 ml-32 bg-black w-40 text-center rounded-md p-2'>Chat history</p>
        {msg.map((msg, i) => {
          if (i % 2 === 0) {
            return (
              <div key={i} className='flex flex-row justify-end mr-8'>
                <p key={i} className='bg-primary text-secondary p-2 rounded-md m-4 z-10'>{msg}</p>
              </div>
            )
          } else {
            return (
              <div key={i} className='flex flex-row justify-start ml-8'>
                <p key={i} className='bg-secondary text-primary p-2 rounded-md m-4 z-10'>{msg}</p>
              </div>
            )
          }
        })}
        <div className="flex justify-center items-center m-6">
          {!isLoading && <p className='text-primary  bg-secondary w-40 text-center rounded-md p-2'>Loading...</p>}
        </div>

      </div>
      {/* create an empty div to fill the space */}
      <div className="h-60"></div>

      <form onSubmit={handleSubmit} className='flex justify-center items-center flex-row form'>
        <textarea 
          type='text'
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='...'
          className='w-1/2 h-32 flex justify-center items-center border border-secondary rounded py-4 px-4 mb-4∂ focus:outline-none focus:border-green-500 '
          />
        <button 
          className='bg-primary hover:bg-jade font-bold py-2 px-4 rounded m-8 text-secondary '
          type='submit'>Send</button>
      </form>
      <div className="spacer"></div>
    </div>
  )
}