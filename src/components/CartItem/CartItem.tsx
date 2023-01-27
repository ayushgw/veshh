import { FC, memo } from 'react';
import { CartItemStyled, CartItemDetails, CartItemImage } from './styles'

import { ICartItem } from '../../features/cartSlice'; 

export type CartItemProps = {
    cartItem: ICartItem
}

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
    const { name, price, imageUrl, quantity } = cartItem;

    return (
        <CartItemStyled>
            <CartItemImage src={imageUrl} alt={`${name}`} />
            <CartItemDetails>
                <div className='name'>{name}</div>
                <div className='amount'>
                    <span className=''>{quantity} x &#8377;{price}</span>
                    <span> &mdash; </span>
                    <span className='total'><b> &#8377;{quantity * price}</b></span>
                </div>
            </CartItemDetails>
        </CartItemStyled>
    )
});

export default CartItem