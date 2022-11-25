import React from 'react'

import './CartItem.scss'

const CartItem = ({ cartItem }) => {
    const { name, quantity } = cartItem;

    return (
        <div>
            <h2>{name}</h2>
            <span>{quantity}</span>
        </div>
    )
}

export default CartItem