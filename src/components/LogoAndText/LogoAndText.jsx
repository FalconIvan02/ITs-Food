import logo from "../../assets/images/logo.png";
import "./LogoAndText.css";

export const LogoAndText = () => {
  return (
    <header>
      <div className="containerLogo">
        <img src={logo} alt="Logo de la empresa" />
        <h2>ITS FOOD</h2>
      </div>
    </header>
  );
};
