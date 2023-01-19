import styled from 'styled-components'
import { ReactComponent as TrashSvg } from '../../assets/bin.svg';

export const CheckoutContainer = styled.div`
    width: 55rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;


    @media (max-width: 1150px) {
        width: 50rem;
    }

    @media (max-width: 850px) {
        width: 40rem;
    }

    @media (max-width: 700px) {
        width: 100%;
    }

    @media (max-width: 600px) {
        min-width: 480px;
    }
`

export const Header = styled.h2`
    font-size: 2.7rem;
    text-transform: uppercase;
    margin: 10px;
`

export const EmptyText = styled.span`
    font-size: 20px;
    color: grey;
`

export const CheckoutTableStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3.125rem auto 6.25rem;

    @media (max-width: 900px) {
        margin: 0.675rem 0;
    }
`

export const TableHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 5fr 2fr 2fr;
    justify-content: space-between;

    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid darkgrey;
`

export const HeaderBlock = styled.div`
    text-transform: capitalize;
    
    &.qty {
        text-align: center;
    }

    &.price {
        text-align: right;
        margin-right: 1rem;
    }
`

export const TrashIcon = styled(TrashSvg)`
    height: 1.1rem;
    width: 1.1rem;
    ${'' /* transition: 0.15s all ease-in; */}
`

export const TableFooter = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    & button.trash {
        background: none;
        border: none;
        font-size: 15px;
        cursor: pointer;
        padding: 0 1rem;
        
        display: grid;
        grid-auto-flow: column;
        column-gap: 1rem;

        &:hover ${TrashIcon} {
            fill: #f11914d6;
            transform: scale(1.05);
        }

        &::after {
            content: 'Remove All Items';
            color: #f11914d6;
            opacity: 0;
            transition: 0.15s all ease-in;

            @media (max-width: 600px) {
                display: none;
            }
        }

        &:hover::after {
            opacity: 1;
        }
    }
`

export const CheckoutTotal = styled.div`
    margin: 1rem 1rem 1rem auto;
    ${'' /* text-align: right; */}
    font-size: 1.5rem;
`