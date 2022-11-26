import React, { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext'
import CheckoutItem from '../CheckoutItem/CheckoutItem';

import './CheckoutTable.scss'

const CheckoutTable = () => {
    const { cartItems, updateQuantityOrRemoveItem } = useContext(CartContext);

    return (
        <div className='checkout-table'>
            <div className="checkout-header">
                <div className="header-block"><span>Product</span></div>
                <div className="header-block"><span>Description</span></div>
                <div className="header-block"><span>Quantity</span></div>
                <div className="header-block"><span>Price</span></div>
                <div className="header-block"><span>Remove</span></div>
            </div>
            {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
            <span className='total'>Total: 0</span>
        </div>
    )
}

export default CheckoutTable

/* 
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
*/