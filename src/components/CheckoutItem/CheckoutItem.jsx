import React, { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext';

import './CheckoutItem.scss'

const CheckoutItem = ({ cartItem }) => {
    const { updateQuantityOrRemoveItem } = useContext(CartContext);

    const { id, name, imageUrl, price, quantity } = cartItem;

    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => updateQuantityOrRemoveItem(id, -1)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => updateQuantityOrRemoveItem(id, 1)}>&#10095;</div>
            </span>
            <span className="price">&#8377;{price}</span>
            <div className="remove-button" onClick={() => updateQuantityOrRemoveItem(id)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem