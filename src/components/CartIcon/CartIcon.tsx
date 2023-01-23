import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleIsCartOpen } from '../../features/cartSlice'

import { CartIconComponent, CartCount, CartIconImage } from './styles'

const CartIcon = () => {
    const dispatch = useAppDispatch();
    const { cartItemsCount } = useAppSelector(store => store.cart);

    const toggleCart = () => {
        document.body.style.overflow = 'hidden';
        dispatch(toggleIsCartOpen())
    }

    return (
        <CartIconComponent onClick={toggleCart}>
            <CartIconImage />
            <CartCount>{cartItemsCount}</CartCount>
        </CartIconComponent>
    )
}

export default CartIcon