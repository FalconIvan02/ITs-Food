import logo from "../assets/images/logo.png";
import "../assets/styles/logoAndText.css";
function LogoAndText() {
    return (
        <header>
            <div className="containerLogo">
                <img src={logo} alt="" />
                <h2>ITS FOOD</h2>
            </div>
        </header>
    );
}
export default LogoAndText;
