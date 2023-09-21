// Importar las dependencias necesarias
import { createContext, useState, useEffect } from "react";

// Crear el contexto de productos
export const ProductsContext = createContext({});

// Crear el proveedor de contexto de productos
export const ProductsContextProvider = ({ children }) => {
    //! Variables de estado para los productos, la carga y el error
    const [data, setProducts] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState(null);

    //! Función para obtener los datos de los productos
    const fetchData = async () => {
        try {
            setError(null);
            setIsLoading(true);
            const response = await fetch("https://api.npoint.io/f98528e04478862228d2");
            const data = await response.json();
            setProducts(data);
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Efecto para inicializar el contexto
    useEffect(() => {
        fetchData();
    }, []);

    // Devolver el proveedor de contexto
    const contextValues = { data, isLoading, isError };

    return <ProductsContext.Provider value={contextValues}>{children}</ProductsContext.Provider>;
};
