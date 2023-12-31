import React, {useState, useEffect} from 'react'
import io from 'socket.io-client';
const socket = io('http://localhost:5001');

function ChatApp() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('message', (data) => {
          setMessages([...messages, data]);
        });
    
        return () => {
          socket.off('message');
        };
      }, [messages]);
  
      
    const sendMessage = (e) =>{
        e.preventDefault();
        socket.emit('message', message);
        setMessage('')
    }

    return (
        <div>
          <ul>
            {messages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
          <form onSubmit={sendMessage}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )
    }
    
    export default ChatApp
    