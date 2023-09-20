import { Link } from "react-router-dom";

import "./HomeNav.css";

export const HomeNav = () => {
  return (
    <main className="HomeNav">
      <ul className="list-container">
        <li>
          <Link to="/Menu">Menú</Link>
        </li>
        <li>
          <Link href="">Locales</Link>
        </li>
        <li>
          <Link href="">Contacto</Link>
        </li>
      </ul>
    </main>
  );
};
