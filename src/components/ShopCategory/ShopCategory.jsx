import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';

import { getProductsFetch } from '../../features/productsSlice';

import { CategoryProducts, CategoryTitle, Error, ErrorImage, ErrorText, ErrorLink } from './styles'

const ShopCategory = ({ category }) => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProductsFetch());
    }, [dispatch])

    const { isLoading, products } = useSelector(store => store.products);

    if(isLoading) {
        return <Loader />;
    }

    const categoryObject = products.find(product => product.title === category)
    
    if (!categoryObject) {
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
                {categoryObject && categoryObject.items.map(item => <ProductCard key={item.id} product={item} />)}
            </CategoryProducts>
        </>
    )
}

export default ShopCategory