import { NavLink } from "react-router-dom";

import CoffeeIcon from "../assets/icons/CoffeeIcon.svg";
import CakeIcon from "../assets/icons/CakeIcon.svg";
import LunchIcon from "../assets/icons/LunchIcon.svg";
import DrinkIcon from "../assets/icons/DrinkIcon.svg";

import "../assets/styles/NavBarMenu.css";

function NavBarMenu() {
  return (
    <>
      <header className="header-menu">
        <div className="icons-container">
          <NavLink
            to="/MenuCoffee"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img src={CoffeeIcon} alt="Icono de café" />
          </NavLink>
          <NavLink
            to="/MenuCake"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img src={CakeIcon} alt="Icono de pasteleria" />
          </NavLink>
          <NavLink
            to="/MenuLunch"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img src={LunchIcon} alt="Icono de comida" />
          </NavLink>
          <NavLink
            to="/MenuDrink"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <img src={DrinkIcon} alt="Icono de tragos" />
          </NavLink>
        </div>
      </header>
    </>
  );
}

export default NavBarMenu;