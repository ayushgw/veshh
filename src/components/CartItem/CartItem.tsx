import { CartItemStyled, CartItemDetails, CartItemImage } from './styles'

import { ICartItem } from '../../features/cartSlice'; 

type CartItemProps = {
    cartItem: ICartItem
}

const CartItem = ({ cartItem }: CartItemProps) => {
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
}

export default CartItem