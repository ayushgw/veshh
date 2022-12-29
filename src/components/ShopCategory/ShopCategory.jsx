import React, { useContext, useEffect, useState } from 'react'

import { CategoriesContext } from '../../contexts/CategoriesContext'
import ProductCard from '../ProductCard/ProductCard';

import { CategoryProducts, CategoryTitle, Error, ErrorImage, ErrorText, ErrorLink } from './styles'

const ShopCategory = ({ category }) => {

    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    const isCategoryValid = ["mens", "womens", "hats", "sneakers", "jackets"].find(cat => cat === category);
    if (!isCategoryValid) {
        return (
            <Error>
                <ErrorImage />
                <ErrorText>'/{category}' is not a valid address</ErrorText>
                <ErrorLink to="/shop">Go back to shop</ErrorLink>
            </Error>
        )
    }

    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryProducts>
                {products && products.map(product => <ProductCard key={product.id} product={product} />)}
            </CategoryProducts>
        </>
    )
}

export default ShopCategory