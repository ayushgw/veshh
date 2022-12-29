import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'

import { CatgeoryPreview, Title, Preview } from './styles'

const ShopCategoryPreview = ({ title, products }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/shop/${title}`)
    };

    return (
        <CatgeoryPreview>
            <h2>
                <Title onClick={handleClick}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {products
                    .filter((_, index) => index < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </Preview>
        </CatgeoryPreview>
    )
}

export default ShopCategoryPreview