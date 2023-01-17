import styled from 'styled-components'

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
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`

export const HeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }
`

export const CheckoutTotal = styled.span`
    margin-top: 1rem;
    margin-left: auto;
    margin-bottom: 1.875rem;
    font-size: 1.5rem;
`