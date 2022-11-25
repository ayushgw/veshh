import React, { useContext } from 'react'

import { ProductsContext } from '../../contexts/ProductsContext'
import ProductCard from '../ProductCard/ProductCard';

import './Products.scss'

const Shop = () => {
    const { products } = useContext(ProductsContext);
    
  return (
    <div className="products">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default Shop