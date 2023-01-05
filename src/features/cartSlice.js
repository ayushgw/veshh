import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartOpen: false,
    cartItems: [],
    cartItemsCount: 0,
    cartTotal: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, { payload }) => {
            const item = payload;
            const { cartItems } = state;

            /* check if item is present in cart */
            const foundItem = cartItems.find((cartItem) => cartItem.id === item.id);

            /* if item present in cart: increse quantity */
            let updatedCartItems;
            if (foundItem) {
                updatedCartItems = cartItems.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
            }

            /* if item not present in cart: add item */
            else {
                updatedCartItems = [...cartItems, { ...item, quantity: 1 }]
            }

            state.cartItems = updatedCartItems
            state.cartItemsCount = updatedCartItems.reduce((count, cartItem) => count + cartItem.quantity, 0);
            state.cartTotal = updatedCartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
        },
        updateQuantityOrRemoveItem: (state, { payload }) => {
            const { id, flag } = payload;
            const { cartItems } = state;

            const foundItem = cartItems.find((cartItem) => cartItem.id === id);

            let updatedCartItems;
            if (!flag || (flag === -1 && foundItem.quantity === 1)) {
                updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
            } else {
                updatedCartItems = cartItems.map((cartItem) => cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity + flag } : cartItem);
            }

            state.cartItems = updatedCartItems
            state.cartItemsCount = updatedCartItems.reduce((count, cartItem) => count + cartItem.quantity, 0);
            state.cartTotal = updatedCartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
        },
        clearCart: (state) => {
            state.cartItems = []
        },
        toggleIsCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen
        }
    },
});

export const { updateCart, addItemToCart, updateQuantityOrRemoveItem, toggleIsCartOpen, clearCart } = cartSlice.actions

export default cartSlice.reducer;
