import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'

import './ShopCategoryPreview.scss'

const ShopCategoryPreview = ({ title, products }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/shop/${title}`)
    };

    return (
        <div className='shop-category-preview'>
            <h2>
                <span className="title" onClick={handleClick}>{title.toUpperCase()}</span>
            </h2>
            <div className="preview">
                {products
                    .filter((_, index) => index < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default ShopCategoryPreview