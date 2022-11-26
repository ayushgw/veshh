import React, { useContext } from 'react'

import Button from '../Button/Button'
import { CartContext } from '../../contexts/CartContext'

import './ProductCard.scss'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    const { addItemToCart } = useContext(CartContext)

    const addToCart = () => addItemToCart(product);

    return (
        <div className="product-card">
            <img src={imageUrl} alt={`${name}`} className="product-card__image" />
            <div className="product-card__footer">
                <span className="product-card__name">{name}</span>
                <span className="product-card__price">&#8377;{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addToCart}>Add to cart</Button>
        </div>
    )
}

export default ProductCard