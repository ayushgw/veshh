import styled from 'styled-components'

export const CheckoutItemStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 5fr 2fr 2fr;
    align-items: center;

    width: 100%;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
  
    .quantity {
      display: flex;
      justify-content: center;
  
      .arrow {
        cursor: pointer;
      }
  
      .value {
        margin: 0 10px;
      }
    }

    .price {
      text-align: right;
      margin-right: 1rem;
    }
`

export const CheckoutItemImageContainer = styled.div`
    padding-right: 15px;

    img {
        width: 100%;
        object-fit: contain;
    }
`

export const CheckoutItemRemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
    display: flex;

    div {
      transition: 0.2s all ease-out;
    }

    &:hover div {
      transform: rotateZ(90deg);
    }
`