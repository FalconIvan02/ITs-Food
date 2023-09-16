import LogoAndText from "../components/LogoAndText";
import CardNexo from "../components/CardNexo";
import "../assets/styles/cardNexoContainer.css";
import MenuFooter from "../components/MenuFooter";
import { Link } from "react-router-dom";
function Menu() {
    return (
        <main>
            <LogoAndText></LogoAndText>
            <div className="cardNexoContainer">
                <Link to="/MenuCoffee">
                    <CardNexo></CardNexo>
                </Link>
                <Link to="/MenuCake">
                    <CardNexo></CardNexo>
                </Link>
                <Link to="/MenuLunch">
                    <CardNexo></CardNexo>
                </Link>
                <Link to="/MenuDrink">
                    <CardNexo></CardNexo>
                </Link>
            </div>
            <MenuFooter></MenuFooter>
        </main>
    );
}

export default Menu;
