import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Button, { BUTTON_TYPES } from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import { toggleIsCartOpen } from '../../features/cartSlice.ts'

import { DropdownBackdrop, Dropdown, Items, EmptyMessage, LinkButton, Subtotal } from './styles'

const CartDropdown = ({ isCartOpen }) => {
    const dispatch = useDispatch();
    const { cartItems, cartTotal, cartItemsCount } = useSelector(store => store.cart);

    const navigate = useNavigate();
    const gotoCheckout = () => {
        navigate('/checkout')
        closeCart();
    };

    const closeCart = () => {
        document.body.style.overflow = 'unset';
        dispatch(toggleIsCartOpen());
    };

    return (
        <>
            <DropdownBackdrop onClick={() => closeCart()} isCartOpen={isCartOpen}></DropdownBackdrop>
            <Dropdown isCartOpen={isCartOpen}>
                <Subtotal>Subtotal({cartItemsCount}): <b>&#8377;{cartTotal}</b></Subtotal>
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