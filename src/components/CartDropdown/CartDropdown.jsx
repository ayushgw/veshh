import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button, { BUTTON_TYPES } from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import { CartContext } from '../../contexts/CartContext'

import { DropdownBackdrop, Dropdown, Items, EmptyMessage, LinkButton } from './styles'

const CartDropdown = () => {
    const { cartItems, setIsCartOpen } = useContext(CartContext);

    const navigate = useNavigate();
    const gotoCheckout = () => {
        navigate('/checkout')
        closeCart();
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    return (
        <>
            <DropdownBackdrop onClick={() => closeCart()}></DropdownBackdrop>
            <Dropdown>
                <Items>
                    {
                        cartItems.length
                            ? cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                            : <EmptyMessage>Your cart is empty</EmptyMessage>
                    }
                </Items>
                <LinkButton onClick={() => closeCart()}>continue shopping &#10550;</LinkButton>
                <Button buttonType={BUTTON_TYPES.base} onClick={gotoCheckout}>go to checkout</Button>
            </Dropdown>
        </>
    )
}

export default CartDropdown