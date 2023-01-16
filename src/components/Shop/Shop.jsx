import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import CategoryPreview from '../CategoryPreview/CategoryPreview';

import { getProductsFetch } from '../../features/productsSlice'
import Loader from '../Loader/Loader';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsFetch());
  }, [dispatch])
  

  const { products, isLoading } = useSelector(store => store.products);

  if(isLoading) {
    return <Loader />;
  }

  return (
    <div className='shop-categories'>
      {products.map(product => {
        const { id, title, items } = product;

        return (
          <CategoryPreview key={id} title={title} products={items} />
        )
      })}
    </div>
  )
}

export default Shop