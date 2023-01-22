import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IItem } from './productsSlice';

interface ICartItem extends IItem {
    quantity: number;
}

interface ICartState {
    isCartOpen: Boolean;
    cartItems: ICartItem[];
    cartItemsCount: number;
    cartTotal: number;
}

interface IPayloadUpdateQuantityOrRemoveItem {
    id: number;
    flag: number | null;
}

const initialState: ICartState = {
    isCartOpen: false,
    cartItems: [],
    cartItemsCount: 0,
    cartTotal: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, { payload }: PayloadAction<ICartItem[]>) => {
            const cartItems = payload;
            state.cartItems = cartItems;
            state.cartItemsCount = cartItems.reduce((count: number, cartItem: ICartItem): number => count + cartItem.quantity, 0);
            state.cartTotal = cartItems.reduce((total: number, cartItem: ICartItem): number => total + (cartItem.price * cartItem.quantity), 0);
            
            localStorage.setItem('veshh_cart_items', JSON.stringify(state.cartItems));
        },
        addItemToCart: (state, actions: PayloadAction<ICartItem>) => {
            const item = actions.payload;
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

            /* update cart */
            const actionsObj = {
                type: 'cart/setCart',
                payload: updatedCartItems
            }

            cartSlice.caseReducers.setCart(state, actionsObj);
        },
        updateQuantityOrRemoveItem: (state, { payload }: PayloadAction<IPayloadUpdateQuantityOrRemoveItem>) => {
            const { id, flag } = payload;
            const { cartItems } = state;

            const foundItem = cartItems.find((cartItem) => cartItem.id === id);

            let updatedCartItems;
            if (!flag || (flag === -1 && foundItem && foundItem.quantity === 1)) {
                updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
            } else {
                updatedCartItems = cartItems.map((cartItem) => cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity + flag } : cartItem);
            }

            const actionsObj = {
                type: 'cart/setCart',
                payload: updatedCartItems
            }

            cartSlice.caseReducers.setCart(state, actionsObj);
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.cartTotal = 0;
            state.cartItemsCount = 0;
            localStorage.removeItem('veshh_cart_items');
        },
        toggleIsCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen
        }
    },
});

export const { setCart, addItemToCart, updateQuantityOrRemoveItem, toggleIsCartOpen, clearCart } = cartSlice.actions

export default cartSlice.reducer;
