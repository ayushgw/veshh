import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { toggleIsCartOpen } from '../../features/cartSlice'

import { CartIconComponent, CartCount, CartIconImage } from './styles'

const CartIcon = () => {
    const dispatch = useDispatch();
    const { cartItemsCount } = useSelector(store => store.cart);

    return (
        <CartIconComponent onClick={() => dispatch(toggleIsCartOpen())}>
            <CartIconImage />
            <CartCount>{cartItemsCount}</CartCount>
        </CartIconComponent>
    )
}

export default CartIcon