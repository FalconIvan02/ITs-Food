import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../ProductsContext";

import NavBarMenu from "../components/NavBarMenu";
import MenuFooter from "../components/MenuFooter/MenuFooter";
import SearchBar from "../components/SearchBar";
import { CardNexo } from "../components/CardNexo/CardNexo";

function MenuDrink() {
  const { data, isLoading, isError } = useContext(ProductsContext);

  const [dataDrinks, setDataDrinks] = useState([]);

  useEffect(() => {
    if (data) {
      setDataDrinks(data.drinks);
    }
  }, [data]);

  const getDataFilter = (query) => {
    // Filtrar los productos basados en la query
    const dataFilter = data.drinks.filter((drinks) => {
      return drinks.nombre.toLowerCase().includes(query);
    });

    setDataDrinks(dataFilter);
  };

  if (isLoading) return <h3>Estoy cargando capo</h3>;

  if (isError) return <h2>Rompiste algo capo</h2>;

  return (
    <>
      <NavBarMenu />
      <div>
        <SearchBar getDataFilter={getDataFilter}></SearchBar>
      </div>
      <div className="cardMenuContainer">
        {dataDrinks &&
          dataDrinks.map(({ imagen, titulo }, index) => (
            <CardNexo key={index} title={titulo} image={imagen} />
          ))}
      </div>
      <MenuFooter />
    </>
  );
}
export default MenuDrink;
