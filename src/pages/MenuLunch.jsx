import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../ProductsContext";

import NavBarMenu from "../components/NavBarMenu";
import MenuFooter from "../components/MenuFooter/MenuFooter";
import SearchBar from "../components/SearchBar";
import { CardNexo } from "../components/CardNexo/CardNexo";

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
