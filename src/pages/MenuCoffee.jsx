import NavBarMenu from "../components/NavBarMenu";
import MenuFooter from "../components/MenuFooter";
import CardMenu from "../components/CardMenu";
import { useContext } from "react";
import { UserContext } from "../../userContext";

function MenuCoffee() {
    const { dataCoffees, isLoading, isError } = useContext(UserContext);
    return (
        <>
            <NavBarMenu />
            <div className="cardMenuContainer">
                {isLoading ? (
                    <h3>Estoy cargando capo</h3>
                ) : isError ? (
                    <h2>Rompiste algo capo</h2>
                ) : (
                    dataCoffees
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
export default MenuCoffee;
