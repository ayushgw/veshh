import React, { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext';

import { ReactComponent as CartIconImage } from '../../assets/shopping-bag.svg';
import './CartIcon.scss'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon' onClick={toggleIsCartOpen}>
            <CartIconImage className='cart-icon__image' />
            <span className='cart-icon__count'>0</span>
        </div>
    )
}

export default CartIcon