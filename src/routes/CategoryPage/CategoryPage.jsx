import React from 'react'
import { useParams } from 'react-router-dom'

import ShopCategory from '../../components/ShopCategory/ShopCategory';

import './CategoryPage.scss'

const CategoryPage = () => {
    const { category } = useParams();

    return (
        <ShopCategory category={category} />
    )
}

export default CategoryPage