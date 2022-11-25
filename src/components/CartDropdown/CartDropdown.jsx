import React from 'react'

import Button from '../Button/Button'

import './CartDropdown.scss'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-dropdown__items'></div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown