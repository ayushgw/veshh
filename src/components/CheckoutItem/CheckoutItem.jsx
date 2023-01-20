import React from 'react'
import { useDispatch } from 'react-redux';

import { updateQuantityOrRemoveItem } from '../../features/cartSlice.js';

import { CheckoutItemStyled, CheckoutItemImageContainer, CheckoutItemRemoveButton } from './styles'

const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch();

    const { id, name, imageUrl, price, quantity } = cartItem;

    return (
        <CheckoutItemStyled>
            <CheckoutItemRemoveButton onClick={() => dispatch(updateQuantityOrRemoveItem({ id, flag: null }))}>
                <div>&#10005;</div>
            </CheckoutItemRemoveButton>
            <CheckoutItemImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </CheckoutItemImageContainer>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => dispatch(updateQuantityOrRemoveItem({ id, flag: -1 }))}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => dispatch(updateQuantityOrRemoveItem({ id, flag: 1 }))}>&#10095;</div>
            </span>
            <span className="price">&#8377;{price}</span>
        </CheckoutItemStyled>
    )
}

export default CheckoutItem