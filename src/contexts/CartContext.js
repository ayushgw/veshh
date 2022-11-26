import { createContext, useEffect, useState } from "react";

// export const CartContext = createContext({
//     isCartOpen: false,
//     setIsCartOpen: () => { },
//     cartItems: [],
//     addItemToCart: () => { },
//     cartItemsCount: null,
//     updateQuantityOrRemoveItem: () => { }
// })
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartItemsCount, setCartItemsCount] = useState(0)

    useEffect(() => {
        const newCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartItemsCount(newCount);
    }, [cartItems]);

    const updateQuantityOrRemoveItem = (id, sum) => {
        const foundItem = cartItems.find((cartItem) => cartItem.id === id);

        let updatedCartItems;
        if (!sum || (sum === -1 && foundItem.quantity === 1)) {
            updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
        } else {
            updatedCartItems = cartItems.map((cartItem) => cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity + sum } : cartItem);
        }

        setCartItems(updatedCartItems);
    }

    const addItemToCart = (item) => {
        /* check if item is present in cart */
        const foundItem = cartItems.find((cartItem) => cartItem.id === item.id);

        let updatedCartItems;
        /* if item present in cart: increse quantity */
        if (foundItem) {
            updatedCartItems = cartItems.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
        }
        /* if item not present in cart: add item */
        else {
            updatedCartItems = [...cartItems, { ...item, quantity: 1 }]
        }

        setCartItems(updatedCartItems);
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartItemsCount, updateQuantityOrRemoveItem };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}