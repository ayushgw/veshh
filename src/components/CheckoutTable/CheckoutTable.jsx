import React, { useContext } from 'react'

import { CartContext } from '../../contexts/CartContext'
import CheckoutItem from '../CheckoutItem/CheckoutItem';

import './CheckoutTable.scss'

const CheckoutTable = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

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
            <span className='total'>Total: &#8377;{cartTotal}</span>
        </div>
    )
}

export default CheckoutTable