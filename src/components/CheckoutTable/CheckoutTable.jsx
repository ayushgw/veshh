import React, { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext'
import CheckoutItem from '../CheckoutItem/CheckoutItem';

import { CheckoutContainer, Header, CheckoutTableStyled, HeaderBlock, TableHeader, CheckoutTotal, EmptyText } from './styles'

const CheckoutTable = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <Header>Your bag</Header>
            {
                cartItems.length < 1
                    ? <EmptyText>is currently empty</EmptyText>
                    : <CheckoutTableStyled>
                        <TableHeader>
                            <HeaderBlock><span>Product</span></HeaderBlock>
                            <HeaderBlock><span>Description</span></HeaderBlock>
                            <HeaderBlock><span>Quantity</span></HeaderBlock>
                            <HeaderBlock><span>Price</span></HeaderBlock>
                            <HeaderBlock><span>Remove</span></HeaderBlock>
                        </TableHeader>
                        {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
                        <CheckoutTotal>Total: &#8377;{cartTotal}</CheckoutTotal>
                    </CheckoutTableStyled>
            }
        </CheckoutContainer>
    )
}

export default CheckoutTable