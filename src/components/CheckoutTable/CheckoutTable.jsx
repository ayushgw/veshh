import React, { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext'
import CheckoutItem from '../CheckoutItem/CheckoutItem';

import { CheckoutTableStyled, HeaderBlock, Header, CheckoutTotal } from './styles'

const CheckoutTable = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckoutTableStyled>
            <Header>
                <HeaderBlock><span>Product</span></HeaderBlock>
                <HeaderBlock><span>Description</span></HeaderBlock>
                <HeaderBlock><span>Quantity</span></HeaderBlock>
                <HeaderBlock><span>Price</span></HeaderBlock>
                <HeaderBlock><span>Remove</span></HeaderBlock>
            </Header>
            {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
            <CheckoutTotal>Total: &#8377;{cartTotal}</CheckoutTotal>
        </CheckoutTableStyled>
    )
}

export default CheckoutTable