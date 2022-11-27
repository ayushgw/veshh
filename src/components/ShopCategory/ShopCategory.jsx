import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/CategoriesContext'
import ProductCard from '../ProductCard/ProductCard';

import { ReactComponent as WarningImage } from '../../assets/warning-error.svg'
import './ShopCategory.scss'

const ShopCategory = ({ category }) => {

    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    const isCategoryValid = ["mens", "womens", "hats", "sneakers", "jackets"].find(cat => cat === category);
    if (!isCategoryValid) {
        return (
            <div style={{ textAlign: 'center', marginTop: '6rem' }}>
                <WarningImage style={{ height: '35px', width: '35px' }} />
                <div style={{ marginTop: '10px', marginBottom: '20px' }}>'/{category}' is not a valid address</div>
                <Link to="/shop" style={{ color: '#5c8fda', marginTop: '20px' }}>Go back to shop</Link>
            </div>
        )
    }

    return (
        <>
            <h2 className='shop-category-title'>{category.toUpperCase()}</h2>
            <div className='shop-category'>
                {products && products.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </>
    )
}

export default ShopCategory