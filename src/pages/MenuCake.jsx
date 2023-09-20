import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../ProductsContext";

import NavBarMenu from "../components/NavBarMenu";
import MenuFooter from "../components/MenuFooter/MenuFooter";
import SearchBar from "../components/SearchBar";
import { CardNexo } from "../components/CardNexo/CardNexo";

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

  if (isLoading) return <h3>Estoy cargando capo</h3>;

  if (isError) return <h2>Rompiste algo capo</h2>;

  return (
    <>
      <NavBarMenu />
      <div>
        <SearchBar getDataFilter={getDataFilter}></SearchBar>
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
