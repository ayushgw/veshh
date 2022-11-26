import React from 'react'

import './CartItem.scss'

const CartItem = ({ cartItem }) => {
    const { name, price, imageUrl, quantity } = cartItem;

    return (
        <div className='cart-item'>
            <img src={imageUrl} alt={`${name}`} className="cart-item__image" />
            <div className="cart-item__details">
                <span className='name'>{name}</span>
                <span className='amount'>{quantity} x &#8377;{price}</span>
            </div>
        </div>
    )
}

export default CartItem