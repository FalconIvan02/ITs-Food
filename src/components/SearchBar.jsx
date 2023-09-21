import SearchIcon from "../assets/icons/SearchIcon.svg";
// import { useContext } from "react";
// import { ProductsContext } from "../../ProductsContext";

import "../assets/styles/searchBar.css";

const SearchBar = ({ getDataFilter }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="searchbar__container">
        <img
          src={SearchIcon}
          alt="Icono de busqueda"
          className="searchbar__image"
        />
        <input
          className="searchbar__input"
          placeholder="¿Que te apetece hoy?"
          type="search"
          onChange={(e) => getDataFilter(e.target.value.toLowerCase())}
        />
      </div>
    </form>
  );
};
export default SearchBar;
