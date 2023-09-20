import "../assets/styles/searchBar.css";
import SearchIcon from "../assets/icons/SearchIcon.svg";
import { useContext } from "react";
import { UserContext } from "../../userContext";
const SearchBar = () => {
  const { handleChangeText } = useContext(UserContext);

  return (
    <>
      <form>
        <div className="searchbar-container">
          <img src={SearchIcon} alt="Icono de busqueda" />
          <input
            placeholder="¿Que te gustaria tomar hoy?"
            type="search"
            onChange={handleChangeText}
          />
        </div>
      </form>
    </>
  );
};
export default SearchBar;