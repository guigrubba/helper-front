import "../style/Global.css";
import "../style/Header.css";
import "../style/Chat.css";
import logo_robo from "../assets/logo_robo.svg";
import logo_robo_2 from "../assets/logo_robo_2.svg";
import send from "../assets/send.svg";
import { useNavigate } from "react-router-dom";

function Chat() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
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
          <p className="chat">
            Seja bem vindo. Eu sou o IWS helper! Em que eu posso ajudar?
          </p>
          <div className="chatbot-body">{/* Messages will go here */}</div>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Digite sua mensagem" />
          <img src={send} className="arrow-icon"></img>
        </div>
      </div>
    </div>
  );
}

export default Chat;
