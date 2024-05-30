import "../style/Global.css";
import "../style/Header.css";
import logo_robo from "../assets/logo_robo.svg";

function Header() {
  return (
    <header className="header">
      <div className="logo_robo">
        <img src={logo_robo} alt="IWS Logo" />
        <p>
          <span>IWS</span> helper
        </p>
      </div>
      <nav className="navigation">
        <ul>
          <li className="active">Home</li>
          <li><a href="https://www.iws.com.br/" >Site</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
