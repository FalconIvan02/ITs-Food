import LogoAndText from "../components/LogoAndText";
import CardNexo from "../components/CardNexo";
import "../assets/styles/cardNexoContainer.css";
import MenuFooter from "../components/MenuFooter";
import { Link } from "react-router-dom";
import canela_y_cacao from "../assets/images/canela_y_cacao.png";
import chocolate_cake from "../assets/images/chocolate_cake.png";
import margarita from "../assets/images/margarita.png";
import triple_melt from "../assets/images/triple_melt.png";
function Menu() {
    return (
        <main>
            <LogoAndText></LogoAndText>
            <div className="cardNexoContainer">
                <Link to="/MenuCoffee">
                    <CardNexo menuName="Coffee" menuImg={canela_y_cacao}></CardNexo>
                </Link>
                <Link to="/MenuCake">
                    <CardNexo menuName="Cake" menuImg={chocolate_cake}></CardNexo>
                </Link>
                <Link to="/MenuLunch">
                    <CardNexo menuName="Lunch" menuImg={triple_melt}></CardNexo>
                </Link>
                <Link to="/MenuDrink">
                    <CardNexo menuName="Drink" menuImg={margarita}></CardNexo>
                </Link>
            </div>
            <MenuFooter></MenuFooter>
        </main>
    );
}

export default Menu;
