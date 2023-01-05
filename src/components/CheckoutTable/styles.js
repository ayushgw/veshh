import styled from 'styled-components'

export const CheckoutContainer = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`

export const Header = styled.h2`
    font-size: 4rem;
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
    margin: 50px auto 0;
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
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`