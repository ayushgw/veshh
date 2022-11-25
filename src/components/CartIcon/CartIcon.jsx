import React from 'react'

import { ReactComponent as CartIconImage } from '../../assets/shopping-bag.svg';
import './CartIcon.scss'

const CartIcon = () => {
    return (
        <div className='cart-icon'>
            <CartIconImage className='cart-icon__image' />
            <span className='cart-icon__count'>0</span>
        </div>
    )
}

export default CartIcon