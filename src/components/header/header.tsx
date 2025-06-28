import headerLogo from "../../assets/header.png";
import "./header.css";

const Header: React.FC = () => (
  <header className="hero">
    {/* imagem de fundo via CSS ::before */}
    <img src={headerLogo} alt="Big Picture" className="hero__logo" />
  </header>
);

export default Header;