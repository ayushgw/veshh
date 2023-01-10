import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Button, { BUTTON_TYPES } from '../Button/Button'
import CheckoutItem from '../CheckoutItem/CheckoutItem';

import { openModal } from '../../features/modalSlice'

import { CheckoutContainer, Header, CheckoutTableStyled, HeaderBlock, TableHeader, CheckoutTotal, EmptyText } from './styles'

const CheckoutTable = () => {
    const dispatch = useDispatch();
    const { cartItems, cartTotal } = useSelector(store => store.cart);

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
                        <Button buttonType={BUTTON_TYPES.base} onClick={() => {dispatch(openModal())}}>clear cart</Button>
                    </CheckoutTableStyled>
            }
        </CheckoutContainer>
    )
}

export default CheckoutTable