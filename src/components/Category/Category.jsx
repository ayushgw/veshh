import React from 'react'
import { useNavigate } from 'react-router-dom';

import { CategoryStyled, CategoryBgImage, CategoryBody, CategoryBodyHeading, CategoryBodyText } from './styles'

const Category = ({ category }) => {
    const navigate = useNavigate();

    const { title, imageUrl } = category;

    const handleClick = () => {
        navigate(`/shop/${title}`)
    };

    return (
        <CategoryStyled onClick={handleClick}>
            <CategoryBgImage imageUrl={imageUrl} />
            <CategoryBody>
                <CategoryBodyHeading>{title}</CategoryBodyHeading>
                <CategoryBodyText>Shop Now</CategoryBodyText>
            </CategoryBody>
        </CategoryStyled>
    )
}

export default Category