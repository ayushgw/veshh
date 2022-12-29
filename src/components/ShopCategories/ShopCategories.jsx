import React, { useContext } from 'react'

import { CategoriesContext } from '../../contexts/CategoriesContext';
import ShopCategoryPreview from '../ShopCategoryPreview/ShopCategoryPreview';

const ShopCategories = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const categories = Object.keys(categoriesMap);

  return (
    <div className='shop-categories'>
      {categories.map(title => {
        const products = categoriesMap[title];

        return (
          <ShopCategoryPreview key={title} title={title} products={products} />
        )
      })}
    </div>
  )
}

export default ShopCategories