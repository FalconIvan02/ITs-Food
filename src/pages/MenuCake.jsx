import NavBarMenu from "../components/NavBarMenu";
import MenuFooter from "../components/MenuFooter";
import { useContext } from "react";
import { UserContext } from "../../userContext";
function MenuCake() {
  const { dataCakes, isLoading, isError, searchText } = useContext(UserContext);

  /*   const filtro = dataCakes.filter((cake) =>
    cake.nombre.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(filtro); */
  return (
    <>
      <NavBarMenu />
      <div className="cardMenuContainer">
        {isLoading ? (
          <h3>Estoy cargando capo</h3>
        ) : isError ? (
          <h2>Rompiste algo capo</h2>
        ) : (
          dataCakes.map((prod) => (
            <section className="containerMenu">
              <img src={prod.imagen}></img>
              <div className="textCard">
                <section className="text">
                  <p>{prod.nombre}</p>
                </section>
              </div>
            </section>
          ))
        )}
      </div>
      <MenuFooter />
    </>
  );
}
export default MenuCake;
