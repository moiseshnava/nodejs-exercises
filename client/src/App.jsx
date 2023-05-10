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
    setMessages([newMessage,...messages]);
    setMessage(initialState.message);
  }

  useEffect(() => {
    const receivedMessage = (message) => {
      setMessages([...messages, message])
    }

    socket.on("message", receivedMessage);
    return () => {
      socket.off("message", receivedMessage);
    }
  }, [messages])



  return (
    <>
      <div>
        <form onSubmit={e => handleSubmit(e)}>
          <input type="text" name="" id="" onChange={e => setMessage(e.target.value)} value={message} />
          <button>send</button>
        </form>
        {
          messages && messages.map((message) => (
            <div >
              <p>{`${message.from} : ${message.body}`}</p>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default App
