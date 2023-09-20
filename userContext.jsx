import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const url = "https://apimocha.com/api-project/menus";
    const [data, setData] = useState([]);
    const [dataCoffees, setDataCoffees] = useState([]);
    const [dataDrinks, setDataDrinks] = useState([]);
    const [dataCakes, setDataCakes] = useState([]);
    const [dataLunch, setDataLunch] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setDataCoffees(data.coffees);
                setDataDrinks(data.drinks);
                setDataCakes(data.cakes);
                setDataLunch(data.lunch);
                console.log(setData);
            })
            .catch((err) => setisError(true))
            .finally(() => setisLoading(false));
    }, []);

    const contextValue = { data, isLoading, isError, dataCoffees, dataDrinks, dataCakes, dataLunch };

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
