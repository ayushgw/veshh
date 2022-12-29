import React, { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext';

import { CartIconComponent, CartCount, CartIconImage } from './styles'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItemsCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconComponent onClick={toggleIsCartOpen}>
            <CartIconImage />
            <CartCount>{cartItemsCount}</CartCount>
        </CartIconComponent>
    )
}

export default CartIcon