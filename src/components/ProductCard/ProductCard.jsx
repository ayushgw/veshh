import React from 'react'
import { useDispatch } from 'react-redux';

import { BUTTON_TYPES } from '../Button/Button'

import { addItemToCart } from '../../features/cartSlice.js';

import { CardButton, CardFooter, CardImage, ProductCardStyled } from './styles'

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { name, price, imageUrl } = product;

    return (
        <ProductCardStyled>
            <CardImage src={imageUrl} alt={`${name}`} />
            <CardFooter>
                <span className="name">{name}</span>
                <span className="price">&#8377;{price}</span>
            </CardFooter>
            <CardButton buttonType={BUTTON_TYPES.inverted} onClick={() => dispatch(addItemToCart(product))}>Add to cart</CardButton>
        </ProductCardStyled>
    )
}

export default ProductCard