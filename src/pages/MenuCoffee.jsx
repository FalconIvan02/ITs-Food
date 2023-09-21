import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../ProductsContext";

import NavBarMenu from "../components/NavBarMenu";
import MenuFooter from "../components/MenuFooter/MenuFooter";
import SearchBar from "../components/SearchBar";
import { CardNexo } from "../components/CardNexo/CardNexo";

function MenuCoffee() {
    const { data, isLoading, isError } = useContext(ProductsContext);

    const [dataCoffees, setDataCoffees] = useState([]);

    useEffect(() => {
        if (data) {
            setDataCoffees(data.coffees);
        }
    }, [data]);

    const getDataFilter = (query) => {
        // Filtrar los productos basados en la query
        const dataFilter = data.coffees.filter((coffee) => {
            return coffee.nombre.toLowerCase().includes(query);
        });

        setDataCoffees(dataFilter);
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
                {dataCoffees &&
                    dataCoffees.map(({ imagen, titulo }, index) => (
                        <CardNexo key={index} title={titulo} image={imagen} />
                    ))}
            </div>
            <MenuFooter />
        </>
    );
}
export default MenuCoffee;
