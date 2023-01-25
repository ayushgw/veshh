import { useEffect } from 'react'

import Loader from '../Loader/Loader'
import Category from '../Category/Category'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getProductsFetch } from '../../features/productsSlice'

import { HomeStyled } from './styles'

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsFetch());
  }, [dispatch])

  const { products, isLoading } = useAppSelector(store => store.products);

  if(isLoading) {
    return <Loader />;
  }

  return (
    <HomeStyled>
      {products.map((product) => (
        <Category product={product} key={product.id} />
      ))}
    </HomeStyled>
  )
}

export default Home