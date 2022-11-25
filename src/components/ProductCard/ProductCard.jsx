import React from 'react'

import Button from '../Button/Button'

import './ProductCard.scss'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    return (
        <div className="product-card">
            <img src={imageUrl} alt={`${name}`} className="product-card__image" />
            <div className="product-card__footer">
                <span className="product-card__name">{name}</span>
                <span className="product-card__price">{price}</span>
            </div>
            <Button buttonType='inverted'>Add to cart</Button>
        </div>
    )
}

export default ProductCard