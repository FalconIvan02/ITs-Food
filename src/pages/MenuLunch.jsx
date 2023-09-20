import NavBarMenu from "../components/NavBarMenu";
import MenuFooter from "../components/MenuFooter";
import { useContext } from "react";
import { UserContext } from "../../userContext";
function MenuLunch() {
    const { dataLunch, isLoading, isError } = useContext(UserContext);
    return (
        <>
            <NavBarMenu />
            <div className="cardMenuContainer">
                {isLoading ? (
                    <h3>Estoy cargando capo</h3>
                ) : isError ? (
                    <h2>Rompiste algo capo</h2>
                ) : (
                    dataLunch.map((prod) => (
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
export default MenuLunch;
