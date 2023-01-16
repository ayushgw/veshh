import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Button, { BUTTON_TYPES } from '../Button/Button'
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import PaymentForm from '../PaymentForm/PaymentForm';

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
                            <HeaderBlock><span>Item</span></HeaderBlock>
                            <HeaderBlock><span>Desc</span></HeaderBlock>
                            <HeaderBlock><span>Qty</span></HeaderBlock>
                            <HeaderBlock><span>Price</span></HeaderBlock>
                            <HeaderBlock><span></span></HeaderBlock>
                        </TableHeader>
                        {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
                        <CheckoutTotal>Total: &#8377;{cartTotal}</CheckoutTotal>
                        <Button buttonType={BUTTON_TYPES.base} onClick={() => { dispatch(openModal()) }}>clear cart</Button>
                    </CheckoutTableStyled>
            }
            <PaymentForm />
        </CheckoutContainer>
    )
}

export default CheckoutTable