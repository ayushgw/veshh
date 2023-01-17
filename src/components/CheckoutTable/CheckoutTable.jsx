import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

// import Button, { BUTTON_TYPES } from '../Button/Button'
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import PaymentForm from '../PaymentForm/PaymentForm';

import { openModal } from '../../features/modalSlice'

import { CheckoutContainer, Header, CheckoutTableStyled, HeaderBlock, TableHeader, CheckoutTotal, EmptyText, TableFooter, TrashIcon } from './styles'

const CheckoutTable = () => {
    const dispatch = useDispatch();
    const { cartItems, cartTotal, cartItemsCount } = useSelector(store => store.cart);

    return (
        <CheckoutContainer>
            <Header>Your bag</Header>
            {
                cartItems.length < 1
                    ? <EmptyText>is currently empty</EmptyText>
                    : <CheckoutTableStyled>
                        <TableHeader>
                            <HeaderBlock><span></span></HeaderBlock>
                            <HeaderBlock><span>Item</span></HeaderBlock>
                            <HeaderBlock><span>Desc</span></HeaderBlock>
                            <HeaderBlock className='qty'><span>Qty</span></HeaderBlock>
                            <HeaderBlock className='price'><span>Price</span></HeaderBlock>
                        </TableHeader>
                        {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
                        <TableFooter>
                            <button className="checkout" onClick={() => { dispatch(openModal()) }}>
                                <TrashIcon />
                            </button>
                            <CheckoutTotal>Total({cartItemsCount} items): &#8377;<b>{cartTotal}</b></CheckoutTotal>
                        </TableFooter>
                        <PaymentForm />
                    </CheckoutTableStyled>
            }
        </CheckoutContainer>
    )
}

export default CheckoutTable