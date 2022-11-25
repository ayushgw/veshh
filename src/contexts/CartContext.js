import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (item) => {
        // check if item is present in cart
        const isItemPresentInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        let updatedCartItems;
        // if item present in cart
        if (isItemPresentInCart) {
            updatedCartItems = cartItems.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
        }
        // if item not present in cart
        else {
            updatedCartItems = [...cartItems, { ...item, quantity: 1 }]
        }

        setCartItems(updatedCartItems);
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}