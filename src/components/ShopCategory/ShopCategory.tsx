import React, { useEffect } from 'react'

import Loader from '../Loader/Loader';
import ProductCard from '../ProductCard/ProductCard';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getProductsFetch } from '../../features/productsSlice';

import { CategoryProducts, CategoryTitle, Error, ErrorImage, ErrorText, ErrorLink } from './styles'

type ShopCategoryProps = {
    category: string;
}

const ShopCategory = ({ category }: ShopCategoryProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(getProductsFetch());
    }, [dispatch])

    const { isLoading, products } = useAppSelector(store => store.products);

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