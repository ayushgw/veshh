import React, { useContext } from 'react'

import { BUTTON_TYPES } from '../Button/Button'
import { CartContext } from '../../contexts/CartContext'

import { CardButton, CardFooter, CardImage, ProductCardStyled } from './styles'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    const { addItemToCart } = useContext(CartContext)

    const addToCart = () => addItemToCart(product);

    return (
        <ProductCardStyled>
            <CardImage src={imageUrl} alt={`${name}`} />
            <CardFooter>
                <span className="name">{name}</span>
                <span className="price">&#8377;{price}</span>
            </CardFooter>
            <CardButton buttonType={BUTTON_TYPES.inverted} onClick={addToCart}>Add to cart</CardButton>
        </ProductCardStyled>
    )
}

export default ProductCard