import "../style/Global.css";
import "../style/Header.css";
import "../style/Chat.css";
import logo_robo from "../assets/logo_robo.svg";
import logo_robo_2 from "../assets/logo_robo_2.svg";
import send from "../assets/send.svg";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import React, { useState } from 'react';

interface Message {
  text: string;
  sender: string;
  timestamp: string;
}

function Chat() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  function handleClick() {
    navigate("/");
  }

  function handleChange(event: any) {
    setInputValue(event.target.value); // Atualiza o estado com o valor do input
  }

  function sendRequest() {
    console.log("click: " + inputValue);
  
    if (inputValue.trim() !== '') {
      const newMessage = {
        text: inputValue,
        sender: 'user', // Define o remetente como o usuário por padrão
        timestamp: new Date().toISOString()
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setInputValue('');
    }

    // useEffect(() => {
      axios.get(`http://localhost:8000/ai-helper/about-us?question=${inputValue}`)
        .then(response => {
          console.log("res" + response.data['response']);
          const newMessage = {
            text: response.data['response'],
            sender: 'bot', // Define o remetente como o usuário por padrão
            timestamp: new Date().toISOString()
          };
          setMessages(prevMessages => [...prevMessages, newMessage]);
          // atualize o estado com os dados recebidos
          // setData(response.data);
          console.log("messages: " + messages.length)
        })
        .catch(error => {
          // trate os erros aqui
          console.error('Erro:', error);
        });
    // }, []);
  }

  return (
    <div>
      <header className="header">
        <div className="logo_robo">
          <img src={logo_robo} alt="IWS Logo" />
          <p>
            <span>IWS</span> helper
          </p>
        </div>
        <nav className="navigation">
          <ul>
            <li className="active">Chat</li>
            <li onClick={handleClick} style={{ cursor: "pointer" }}>
              Home
            </li>
            <li>Site</li>
          </ul>
        </nav>
      </header>
      <div className="chatbot">
        <div className="chatbot-bot">
          <div className="chatbot-header">
            <img src={logo_robo_2} alt="IWS Logo" />
            <p className="name-chat">ChatBot</p>
          </div>
          <p className="bot-msg">
            Seja bem vindo. Eu sou o IWS helper! Em que eu posso ajudar?
          </p>
          <div className="chatbot-body">
            {messages.map((message, index) => (
            <div key={index}>
              {/* <span>{message.sender === 'user' ? 'Você' : 'Bot'}:</span> */}
              <p className={message.sender === 'user' ? 'your-msg' : 'bot-msg'}>{message.text}</p>
            </div>
          ))}
          </div>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Digite sua mensagem" value={inputValue} onChange={handleChange}/>
          <div onClick={sendRequest}>
            <img src={send} className="arrow-icon"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
