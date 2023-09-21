import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../ProductsContext";

import NavBarMenu from "../components/NavBarMenu";
import MenuFooter from "../components/MenuFooter/MenuFooter";
import SearchBar from "../components/SearchBar";
import { CardNexo } from "../components/CardNexo/CardNexo";
import PacmanLoader from "react-spinners/PacmanLoader";
import AscendingIcon from "../assets/icons/Sort-ascending-letters.svg";
import DescendingIcon from "../assets/icons/Sort-descending-letters.svg";

function MenuLunch() {
    const { data, isLoading, isError } = useContext(ProductsContext);

    const [dataLunch, setDataLunch] = useState([]);

    useEffect(() => {
        if (data) {
            setDataLunch(data.lunch);
        }
    }, [data]);

    const getDataFilter = (query) => {
        // Filtrar los productos basados en la query
        const dataFilter = data.lunch.filter((lunch) => {
            return lunch.nombre.toLowerCase().includes(query);
        });

        setDataLunch(dataFilter);
    };

    const descendingEvent = () => {
        let data = [...dataLunch];
        console.log("La funcion se ejecuta");
        if (data.length > 0) {
            console.log("La funcion entra al sorting descending");
            let result = data.sort((a, b) => b.nombre.localeCompare(a.nombre));
            setDataLunch(result);
        }
    };
    const ascendingEvent = () => {
        let data = [...dataLunch];
        if (data.length > 0) {
            console.log("La funcion entra al sorting ascending");
            let result = data.sort((a, b) => a.nombre.localeCompare(b.nombre));
            setDataLunch(result);
        }
    };

    if (isLoading)
        return (
            <div className="Message-loading">
                <PacmanLoader color="#F9E0AE" />
            </div>
        );

    if (isError) return <h2>Rompiste algo capo</h2>;

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
                {dataLunch &&
                    dataLunch.map(({ imagen, titulo }, index) => (
                        <CardNexo key={index} title={titulo} image={imagen} />
                    ))}
            </div>
            <MenuFooter />
        </>
    );
}
export default MenuLunch;
