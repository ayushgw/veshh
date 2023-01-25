import { useParams } from 'react-router-dom'

import ShopCategory from '../../components/ShopCategory/ShopCategory';

import './CategoryPage.scss'

type CategoryPageParams = {
    category: string;
}

const CategoryPage = () => {
    const { category } = useParams<keyof CategoryPageParams>() as CategoryPageParams;

    return (
        <ShopCategory category={category} />
    )
}

export default CategoryPage