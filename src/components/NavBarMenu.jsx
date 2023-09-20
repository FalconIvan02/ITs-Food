import CoffeeIcon from "../assets/icons/CoffeeIcon.svg";
import CakeIcon from "../assets/icons/CakeIcon.svg";
import LunchIcon from "../assets/icons/LunchIcon.svg";
import DrinkIcon from "../assets/icons/DrinkIcon.svg";
import SearchBar from "./SearchBar";
import "../assets/styles/NavBarMenu.css";
import { Link, NavLink } from "react-router-dom";

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
          <NavLink to="/MenuCake">
            <img
              src={CakeIcon}
              alt="Icono de pasteleria"
              className={({ isActive }) => (isActive ? "active" : "")}
            />
          </NavLink>
          <NavLink to="/MenuLunch">
            <img
              src={LunchIcon}
              alt="Icono de comida"
              className={({ isActive }) => (isActive ? "active" : "")}
            />
          </NavLink>
          <NavLink to="/MenuDrink">
            <img
              src={DrinkIcon}
              alt="Icono de tragos"
              className={({ isActive }) => (isActive ? "active" : "")}
            />
          </NavLink>
        </div>
        <div>
          <SearchBar></SearchBar>
        </div>
      </header>
    </>
  );
}
export default NavBarMenu;
