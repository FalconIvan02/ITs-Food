import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const url = "https://apimocha.com/itsfoodapi/menus";
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisError] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data.coffees);
                console.log(data);
            })
            .catch((err) => setisError(true))
            .finally(() => setisLoading(false));
    }, []);

    const handleChangeText = (e) => {
        setSearchText(e.target.value);
    };

    const contextValue = { data, isLoading, isError };

    return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
