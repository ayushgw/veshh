import React, { useContext } from 'react'

import { CategoriesContext } from '../../contexts/CategoriesContext';
import ProductCard from '../ProductCard/ProductCard';

import './ProductCategories.scss'

const ProductCategories = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const categories = Object.keys(categoriesMap);

  return (
    <>
      {categories.map(title => {
        return (
          <div key={title}>
            <h2>{title}</h2>
            <div className="product">
              {categoriesMap[title].map((product, index) => {
                if (index < 4)
                  return (
                    <ProductCard key={product.id} product={product} />
                  )
                return null;
              })}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ProductCategories