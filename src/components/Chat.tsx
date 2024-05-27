import "../style/Global.css";
import "../style/Header.css";
import "../style/Chat.css";
import logo_robo from "../assets/logo_robo.svg";
import logo_robo_2 from "../assets/logo_robo_2.svg";
import send from "../assets/send.svg";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import React, { useState } from 'react';
import { waveform } from 'ldrs'


interface Message {
  text: string;
  sender: string;
  timestamp: string;
}

function Chat() {
  let location = useLocation();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  waveform.register()
  
  let textFirstMsg: string;
  if (location.state.key == 'web-navegation'){
    textFirstMsg = "<p>Seja bem vindo. Eu sou o IWS helper! Fiquei sabendo que você está precisando de ajuda com a navegação do nosso site, em que eu posso ajudar?</p>"
  } else if (location.state.key == 'about-us'){
    textFirstMsg = "<p>Seja bem vindo. Eu sou o IWS helper! Fiquei sabendo que você está com duvidas sobre a empresa, em que eu posso ajudar?</p>"
  } else if (location.state.key == 'functionalities'){
    textFirstMsg = "<p>Seja bem vindo. Eu sou o IWS helper! Fiquei sabendo que você gostaria de saber mais sobre os produtos oferecidos pela empresa, em que eu posso ajudar?</p>"
  } else {
    textFirstMsg = "<p>Seja bem vindo. Eu sou o IWS helper! Fiquei sabendo que você gostaria de saber mais sobre a empresa, em que eu posso ajudar?</p>"
  }
  // first message
  const firstMsg = {
    text: textFirstMsg,
    sender: 'bot', // Define o remetente como o usuário por padrão
    timestamp: new Date().toISOString()
  };
  const [messages, setMessages] = useState<Message[]>([firstMsg]);

  function handleClick() {
    navigate("/");
  }

  function handleChange(event: any) {
    setInputValue(event.target.value); // Atualiza o estado com o valor do input
  }

  function sendRequest() {
    
    console.log("click: " + location.state.key);
    var messagesAux = messages;
    
    if (inputValue.trim() !== '') {
      const newMessage = {
        text: inputValue,
        sender: 'user', // Define o remetente como o usuário por padrão
        timestamp: new Date().toISOString()
      };
      // setMessages(prevMessages => [...prevMessages, newMessage]);
      setInputValue('');
      setLoading(true);
      messages.push(newMessage)
      // messagesAux.push(newMessage);
    }

    console.log(JSON.stringify(messagesAux));
    console.log(messages);

    // useEffect(() => {
      axios({
        method: 'post',
        url: `http://localhost:8000/ai-helper/${location.state.key}`,
        data: {chatHistory: JSON.stringify(messagesAux)},
      })
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
          setLoading(false);
        })
        .catch(error => {
          // trate os erros aqui
          console.error('Erro:', error);
          setLoading(false);
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
          {/* <p className="bot-msg">
            Seja bem vindo. Eu sou o IWS helper! Em que eu posso ajudar?
          </p> */}
          <div className="chatbot-body" style={{ maxHeight: '345px', overflowY: 'auto' }}>
            {messages.map((message, index) => (
            <div key={index}>
              {/* <span>{message.sender === 'user' ? 'Você' : 'Bot'}:</span> */}
              <p className={message.sender === 'user' ? 'your-msg' : 'bot-msg'} dangerouslySetInnerHTML={{__html: message.text}}></p>
            </div>
          ))}
          </div>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Digite sua mensagem" value={inputValue} onChange={handleChange}/>
          <div onClick={sendRequest}>

            <img src={send} className="arrow-icon" hidden={loading}></img>
            <div className="arrow-icon" hidden={!loading}>
              <l-waveform 
              size="25"
              stroke="3"
              speed="1.5" 
              color="black" 
              ></l-waveform>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
