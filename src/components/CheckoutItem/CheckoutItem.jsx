import React, { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext';

import { CheckoutItemStyled, CheckoutItemImageContainer, CheckoutItemRemoveButton } from './styles'

const CheckoutItem = ({ cartItem }) => {
    const { updateQuantityOrRemoveItem } = useContext(CartContext);

    const { id, name, imageUrl, price, quantity } = cartItem;

    return (
        <CheckoutItemStyled>
            <CheckoutItemImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </CheckoutItemImageContainer>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => updateQuantityOrRemoveItem(id, -1)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => updateQuantityOrRemoveItem(id, 1)}>&#10095;</div>
            </span>
            <span className="price">&#8377;{price}</span>
            <CheckoutItemRemoveButton onClick={() => updateQuantityOrRemoveItem(id)}>&#10005;</CheckoutItemRemoveButton>
        </CheckoutItemStyled>
    )
}

export default CheckoutItem