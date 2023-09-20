import { NavLink } from "react-router-dom";

import menu from "../../assets/icons/nav/menu.svg";
import cart from "../../assets/icons/nav/cart.svg";
import logo from "../../assets/images/logo.png";
import ubication from "../../assets/icons/nav/ubication.svg";
import heart from "../../assets/icons/nav/heart.svg";

import "./MenuFooter.css";

function MenuFooter() {
  return (
    <footer>
      <section>
        <NavLink
          to="/Menu"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <img className="footer__image" src={menu} alt="Icono del carrito" />
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <img className="footer__image" src={cart} alt="Icono del carrito" />
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <img className="footer__logo" src={logo} alt="IT's food icon" />
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <img
            className="footer__image"
            src={ubication}
            alt="ubicación del local"
          />
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <img className="footer__image" src={heart} alt="Corazón de melón" />
        </NavLink>
      </section>
    </footer>
  );
}
export default MenuFooter;
