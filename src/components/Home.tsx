import "../style/Global.css";
import "../style/Home.css";
import logo_empresa from "../assets/logo_empresa.svg";
import logo_robo_2 from "../assets/logo_robo_2.svg";
import navegacao from "../assets/navegacao.png";
import funcionalidade from "../assets/funcionalidade.svg";
import outros from "../assets/outros.svg";
import sobre from "../assets/sobre.svg";
import Header from "./Header.tsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/chat");
  }

  return (
    <div className="app">
      <Header></Header>

      <div className="helper-intro">
        <div className="helper-icon">
          <img src={logo_empresa} alt="IWS Logo" />
          <img src={logo_robo_2} alt="IWS Logo" />
        </div>
        <p>Olá, eu sou o IWS helper! Como posso ajudá-lo, hoje?</p>
      </div>

      <div className="options">
        <div
          className="option"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          <img src={navegacao} alt="IWS Logo" />
          <p>Navegação do site</p>
        </div>
        <div
          className="option"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          <img src={sobre} alt="IWS Logo" />
          <p>Sobre a empresa</p>
        </div>
        <div
          className="option"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          <img src={funcionalidade} alt="IWS Logo" />
          <p>Funcionalidade</p>
        </div>
        <div
          className="option"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          <img src={outros} alt="IWS Logo" />
          <p>Outros</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
