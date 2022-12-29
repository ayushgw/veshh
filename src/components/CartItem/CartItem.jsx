import React from 'react'

import { CartItemStyled, CartItemDetails, CartItemImage } from './styles'

const CartItem = ({ cartItem }) => {
    const { name, price, imageUrl, quantity } = cartItem;

    return (
        <CartItemStyled>
            <CartItemImage src={imageUrl} alt={`${name}`} />
            <CartItemDetails>
                <span className='name'>{name}</span>
                <span className='amount'>{quantity} x &#8377;{price}</span>
            </CartItemDetails>
        </CartItemStyled>
    )
}

export default CartItem