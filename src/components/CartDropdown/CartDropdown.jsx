import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import { CartContext } from '../../contexts/CartContext'

import './CartDropdown.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    const navigate = useNavigate();
    const gotoCheckout = () => navigate('/checkout');

    return (
        <div className='cart-dropdown'>
            <div className='cart-dropdown__items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button onClick={gotoCheckout}>go to checkout</Button>
        </div>
    )
}

export default CartDropdown