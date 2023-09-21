import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../ProductsContext";

import NavBarMenu from "../components/NavBarMenu";
import MenuFooter from "../components/MenuFooter/MenuFooter";
import SearchBar from "../components/SearchBar";
import { CardNexo } from "../components/CardNexo/CardNexo";
import PacmanLoader from "react-spinners/PacmanLoader";
import AscendingIcon from "../assets/icons/Sort-ascending-letters.svg";
import DescendingIcon from "../assets/icons/Sort-descending-letters.svg";
function MenuCake() {
    const { data, isLoading, isError } = useContext(ProductsContext);

    const [dataCakes, setDataCakes] = useState([]);

    useEffect(() => {
        if (data) {
            setDataCakes(data.cakes);
        }
    }, [data]);

    const getDataFilter = (query) => {
        // Filtrar los productos basados en la query
        const dataFilter = data.cakes.filter((cakes) => {
            return cakes.nombre.toLowerCase().includes(query);
        });

        setDataCakes(dataFilter);
    };

    if (isLoading)
        return (
            <div className="Message-loading">
                <PacmanLoader color="#F9E0AE" />
            </div>
        );

    if (isError)
        return (
            <div className="Message-Error">
                <h2>Rompiste algo capo</h2>
            </div>
        );
    const descendingEvent = () => {
        let data = [...dataCakes];
        console.log("La funcion se ejecuta");
        if (data.length > 0) {
            console.log("La funcion entra al sorting descending");
            let result = data.sort((a, b) => b.nombre.localeCompare(a.nombre));
            setDataCakes(result);
        }
    };
    const ascendingEvent = () => {
        let data = [...dataCakes];
        if (data.length > 0) {
            console.log("La funcion entra al sorting ascending");
            let result = data.sort((a, b) => a.nombre.localeCompare(b.nombre));
            setDataCakes(result);
        }
    };

    return (
        <>
            <NavBarMenu />
            <div>
                <SearchBar getDataFilter={getDataFilter}></SearchBar>
            </div>
            <div className="buttons-sorting-container">
                <button onClick={ascendingEvent}>
                    <img src={AscendingIcon} alt="" />
                </button>
                <button onClick={descendingEvent}>
                    <img src={DescendingIcon} alt="" />
                </button>
            </div>
            <div className="cardMenuContainer">
                {dataCakes &&
                    dataCakes.map(({ imagen, titulo }, index) => (
                        <CardNexo key={index} title={titulo} image={imagen} />
                    ))}
            </div>
            <MenuFooter />
        </>
    );
}
export default MenuCake;
