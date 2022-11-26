import { createContext, useEffect, useState } from "react";

import PRODUCTS from '../shopData.json';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const value = { products };

    useEffect(() => {
        setProducts(PRODUCTS)
    }, [])


    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}