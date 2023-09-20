import { Link } from "react-router-dom";

import { LogoAndText } from "../components/LogoAndText/LogoAndText";
import { CardNexo } from "../components/CardNexo/CardNexo";
import MenuFooter from "../components/MenuFooter/MenuFooter";

import canela_y_cacao from "../assets/images/canela_y_cacao.png";
import chocolate_cake from "../assets/images/chocolate_cake.png";
import margarita from "../assets/images/margarita.png";
import triple_melt from "../assets/images/triple_melt.png";

import "../assets/styles/cardNexoContainer.css";

function Menu() {
  return (
    <main>
      <LogoAndText />
      <div className="cardNexoContainer">
        <Link to="/MenuCoffee">
          <CardNexo title="Coffee" image={canela_y_cacao} isValid={true} />
        </Link>
        <Link to="/MenuCake">
          <CardNexo title="Cake" image={chocolate_cake} isValid={true} />
        </Link>
        <Link to="/MenuLunch">
          <CardNexo title="Lunch" image={triple_melt} isValid={true} />
        </Link>
        <Link to="/MenuDrink">
          <CardNexo title="Drink" image={margarita} isValid={true} />
        </Link>
      </div>
      <MenuFooter />
    </main>
  );
}

export default Menu;
