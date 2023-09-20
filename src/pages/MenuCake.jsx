import NavBarMenu from "../components/NavBarMenu";
import MenuFooter from "../components/MenuFooter";
import { useContext } from "react";
import { UserContext } from "../../userContext";
function MenuCake() {
    const { dataCakes, isLoading, isError } = useContext(UserContext);
    return (
        <>
            <NavBarMenu />
            <div className="cardMenuContainer">
                {isLoading ? (
                    <h3>Estoy cargando capo</h3>
                ) : isError ? (
                    <h2>Rompiste algo capo</h2>
                ) : (
                    dataCakes
                        .sort((a, b) => (a.nombre > b.nombre ? 1 : -1))
                        .map((prod) => (
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
