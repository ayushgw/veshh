import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const value = { products };

    useEffect(() => {
        // self invoking function
        (async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        })();
    }, []);


    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}