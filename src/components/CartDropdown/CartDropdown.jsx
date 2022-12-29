import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button, { BUTTON_TYPES } from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import { CartContext } from '../../contexts/CartContext'

import { CartDropdownContainer, CartDropdownItems, EmptyMessage } from './styles'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    const navigate = useNavigate();
    const gotoCheckout = () => navigate('/checkout');

    return (
        <CartDropdownContainer>
            <CartDropdownItems>
                {
                    cartItems.length 
                    ? cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                    : <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartDropdownItems>
            <Button buttonType={BUTTON_TYPES.base} onClick={gotoCheckout}>go to checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown