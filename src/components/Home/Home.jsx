import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../Loader/Loader'
import Category from '../Category/Category'

import { getProductsFetch } from '../../features/productsSlice.ts'

import { HomeStyled } from './styles'

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsFetch());
  }, [dispatch])

  const { products, isLoading } = useSelector(store => store.products);

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