import { useNavigate } from 'react-router-dom';

import { CategoryStyled, CategoryBgImage, CategoryBody, CategoryBodyHeading, CategoryBodyText } from './styles'

export type ProductProps = {
    title: string;
    imageUrl: string;
}

type CategoryProps = {
    product: ProductProps
}

const Category = ({ product }: CategoryProps) => {
    const navigate = useNavigate();

    const { title, imageUrl } = product;

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