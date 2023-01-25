import { useEffect } from 'react'

import Loader from '../Loader/Loader';
import CategoryPreview from '../CategoryPreview/CategoryPreview';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getProductsFetch } from '../../features/productsSlice'

const Shop = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsFetch());
  }, [dispatch])


  const { products, isLoading } = useAppSelector(store => store.products);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {products.map(product => {
        const { id, title, items } = product;

        return (
          <CategoryPreview key={id} title={title} products={items} />
        )
      })}
    </>
  )
}

export default Shop