import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'

import { CatgeoryPreviewStyled, Title, Preview } from './styles'

import { IItem } from '../../features/productsSlice'

type CategoryPreviewProps = {
    title: string;
    products: IItem[];
}

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/shop/${title}`)
    };

    return (
        <CatgeoryPreviewStyled>
            <h2>
                <Title onClick={handleClick}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {products
                    .filter((_, index) => index < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </Preview>
        </CatgeoryPreviewStyled>
    )
}

export default CategoryPreview