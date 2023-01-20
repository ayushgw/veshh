import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { toggleIsCartOpen } from '../../features/cartSlice.ts'

import { CartIconComponent, CartCount, CartIconImage } from './styles'

const CartIcon = () => {
    const dispatch = useDispatch();
    const { cartItemsCount } = useSelector(store => store.cart);

    const toggleCart = () => {
        document.body.style.overflow = 'hidden';
        dispatch(toggleIsCartOpen())
    }

    return (
        <CartIconComponent onClick={toggleCart}>
            <CartIconImage />
            <CartCount>{cartItemsCount}</CartCount>
        </CartIconComponent>
    )
}

export default CartIcon