import React, { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext'

import './CheckoutCartTable.scss'

const CheckoutCartTable = () => {
    const { cartItems, updateQuantityOrRemoveItem } = useContext(CartContext);

    return (
        <div className='checkout-table'>
            {cartItems.map((cartItem) => {
                const { id, imageUrl, name, price, quantity } = cartItem;

                return (
                <div className="checkout-table__row" key={id}>
                    <div className="checkout-table__product">
                        <img src={imageUrl} alt={name} />
                    </div>
                    <div className="checkout-table__description">{name}</div>
                    <div className="checkout-table__quantity">
                        <button onClick={() => updateQuantityOrRemoveItem(id, -1)}>{'<'}</button>
                        <span>{quantity}</span>
                        <button onClick={() => updateQuantityOrRemoveItem(id, 1)}>{'>'}</button>
                    </div>
                    <div className="checkout-table__price">{quantity * price}</div>
                    <div className="checkout-table__remove">
                        <button onClick={() => updateQuantityOrRemoveItem(id)}>X</button>
                    </div>
                </div>
            )})}
        </div>
    )
}

export default CheckoutCartTable