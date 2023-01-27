import styled from 'styled-components'
import Button from '../Button/Button'

export const CardImage = styled.img`
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
`

export const CardButton = styled(Button)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 16rem;
    display: none;

    @media (max-width: 600px) {
      top: 12rem;
    }
`

export const ProductCardStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 22rem;
  min-width: 15rem;
  margin-bottom: 2.5rem;

  &:hover {
    ${CardImage} {
      opacity: 0.8;
    }

    ${CardButton} {
      opacity: 0.85;
      display: flex;
    }
  }
  
  @media (max-width: 600px) {
    height: 17rem;
    min-width: 12rem;

    ${CardButton} {
      display: flex;
      opacity: 1;
    }

    &:hover {
      ${CardImage} {
        opacity: unset;
      }

      ${CardButton}(.nohover) {
        opacity: 1;
      }
    }
  }
`

export const CardFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
        ${'' /* width: 90%; */}
        ${'' /* margin-bottom: 15px; */}
    }

    .price {
        ${'' /* width: 10%;  */}
    }
`