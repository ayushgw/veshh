import { useNavigate } from 'react-router-dom'

import Button, { BUTTON_TYPES } from '../Button/Button'
import CartItem from '../CartItem/CartItem'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { toggleIsCartOpen } from '../../features/cartSlice'

import { DropdownBackdrop, Dropdown, Items, EmptyMessage, LinkButton, Subtotal } from './styles'

export type CartDropdownProps = {
    isCartOpen?: boolean;
}

const CartDropdown = ({ isCartOpen }: CartDropdownProps) => {
    const dispatch = useAppDispatch();
    const { cartItems, cartTotal, cartItemsCount } = useAppSelector(store => store.cart);

    const navigate = useNavigate();
    const gotoCheckout = () => {
        navigate('/checkout')
        closeCart();
    };

    const closeCart = () => {
        document.body.style.overflow = 'unset';
        dispatch(toggleIsCartOpen());
    };

    return (
        <>
            <DropdownBackdrop onClick={() => closeCart()} isCartOpen={isCartOpen}></DropdownBackdrop>
            <Dropdown isCartOpen={isCartOpen}>
                <Subtotal>Subtotal({cartItemsCount}): <b>&#8377;{cartTotal}</b></Subtotal>
                <Items>
                    {
                        cartItems.length
                            ? cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                            : <EmptyMessage>Your cart is empty</EmptyMessage>
                    }
                </Items>
                <LinkButton onClick={() => closeCart()}>continue shopping &#10550;</LinkButton>
                <Button buttonType={BUTTON_TYPES.base} onClick={gotoCheckout}>go to checkout</Button>
            </Dropdown>
        </>
    )
}

export default CartDropdown