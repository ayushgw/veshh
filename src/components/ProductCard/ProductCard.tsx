import { useRef } from 'react';
import { BUTTON_TYPES } from '../Button/Button'

import { useAppDispatch } from '../../app/hooks';
import { addItemToCart } from '../../features/cartSlice';

import { CardButton, CardFooter, CardImage, ProductCardStyled } from './styles'

import { IItem } from '../../features/productsSlice';

type ProductCardProps = {
    product: IItem;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const dispatch = useAppDispatch();

    const { name, price, imageUrl } = product;

    return (
        <ProductCardStyled>
            <CardImage src={imageUrl} alt={`${name}`} />
            <CardFooter>
                <span className="name">{name}</span>
                <span className="price">&#8377;{price}</span>
            </CardFooter>
            <CardButton className={windowSize.current[0] < 600 ? 'nohover' : ''} buttonType={BUTTON_TYPES.inverted} onClick={() => dispatch(addItemToCart(product))}>Add to cart</CardButton>
        </ProductCardStyled>
    )
}

export default ProductCard