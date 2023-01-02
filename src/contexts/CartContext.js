import { createContext, useReducer } from "react";

import { CreateAction } from '../utils/reducer/reducer'

export const CartContext = createContext();

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartItemsCount: 0,
    cartTotal: 0
}

export const USER_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: !state.isCartOpen
            }
        case USER_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        default:
            throw new Error(`Unhandled type ${type} in User Reducer`)
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const { isCartOpen, cartItems, cartItemsCount, cartTotal } = state;

    const updateCart = (cartItems) => {
        const cartItemsCount = cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0);
        const cartTotal = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);

        dispatch(CreateAction(USER_ACTION_TYPES.SET_CART_ITEMS, { cartItems, cartTotal, cartItemsCount }));
    }

    const setIsCartOpen = () => {
        dispatch(CreateAction(USER_ACTION_TYPES.SET_IS_CART_OPEN));
    }

    const updateQuantityOrRemoveItem = (id, sum) => {
        const foundItem = cartItems.find((cartItem) => cartItem.id === id);

        let updatedCartItems;
        if (!sum || (sum === -1 && foundItem.quantity === 1)) {
            updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
        } else {
            updatedCartItems = cartItems.map((cartItem) => cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity + sum } : cartItem);
        }

        updateCart(updatedCartItems);
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

        updateCart(updatedCartItems);
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartItemsCount, updateQuantityOrRemoveItem, cartTotal };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}