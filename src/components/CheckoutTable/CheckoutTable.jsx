import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

// import Button, { BUTTON_TYPES } from '../Button/Button'
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import PaymentForm from '../PaymentForm/PaymentForm';

import { clearCart } from '../../features/cartSlice';
import { closeModal, openModal } from '../../features/modalSlice'

import { CheckoutContainer, Header, CheckoutTableStyled, HeaderBlock, TableHeader, CheckoutTotal, EmptyText, TableFooter, TrashIcon } from './styles'

const CheckoutTable = () => {
    const dispatch = useDispatch();
    const { cartItems, cartTotal, cartItemsCount } = useSelector(store => store.cart);

    const openRemoveAllItemsModal = () => {
        const content = new Map();
        content.set('text', 'Are you sure yo want to remove all items from your shopping cart?');
        content.set('button1Text', 'confirm');
        content.set('button2Text', 'cancel');
        content.set('button1Callback', () => {
            dispatch(clearCart());
            dispatch(closeModal());
        });
        content.set('button2Callback', () => { 
            dispatch(closeModal());
         });

        const modalProps = { type: 'confirm', content: content };
        dispatch(openModal(modalProps));
    }

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
                            <button className="trash" onClick={openRemoveAllItemsModal}>
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