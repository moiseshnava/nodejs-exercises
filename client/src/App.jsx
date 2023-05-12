import { useEffect, useState } from 'react';
import './App.css'
import io from "socket.io-client";

const socket = io("http://192.168.100.49:4000");


const initialState = {
  message: "",
  messages: []
}
function App() {
  const [message, setMessage] = useState(initialState.message);
  const [messages, setMessages] = useState(initialState.messages);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    const newMessage = {
      body: message,
      from: "Me"
    }
    setMessages([newMessage, ...messages]);
    setMessage(initialState.message);
  }

  useEffect(() => {
    const receivedMessage = (message) => {
      setMessages([message, ...messages])
    }

    socket.on("message", receivedMessage);
    return () => {
      socket.off("message", receivedMessage);
    }
  }, [messages])



  return (
    <>
      <div className='flex flex-col h-screen items-center justify-center bg-zinc-800 text-white'>
        <div className='flex flex-col bg-zinc-950 p-2 justify-center items-center '>
          <h1 className='font-bold text-2xl text-center'>Chat React</h1>
          <form
            className='flex flex-col rounded-lg bg-zinc-950 p-10 mb-4'
            onSubmit={e => handleSubmit(e)}>
            <input
              className='w-full border-2 border-zinc-500 p-2 rounded-lg text-black'
              type="text" name="" id=""
              onChange={e => setMessage(e.target.value)}
              value={message}
              placeholder='Write a message...'
            />
            <button className='h-10 justify-center items-center bg-blue-500 rounded-xl mt-2 '>send</button>
          </form>
          <ul className='h-80 overflow-auto p-2'>
            {
              messages && messages.map((message, index) => (
                <li key={index}
                  className={`my-1 table p-2 rounded-md ${message.from === "Me" ? "bg-sky-700 ml-auto" : "bg-zinc-700"}`}
                >
                  <p>{`${message.from} : ${message.body}`}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

    </>
  )
}

export default App
