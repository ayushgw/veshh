import styled from 'styled-components'

export const CartItemStyled = styled.div`
    display: grid;
    grid-template-columns: 2fr 5fr;
    grid-column-gap: 0.5rem;

    width: 100%;
    height: 6rem;
    margin-bottom: 15px;
`

export const CartItemImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    overflow: auto;
`

export const CartItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    padding: 0.625rem 0.25rem;

    .name {
        font-size: 16px;
    }

    .amount {
        margin-left: auto;
    }

    .total {

    }
`