import styled from 'styled-components'

import Button from '../Button/Button';

export const PaymentFormStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: rgba(128, 128, 128, 0.15);
    height: 14rem;
    width: 100%;
    margin-top: 1rem;
`

export const Form = styled.form`
    max-width: 600px;
    width: 100%;
    padding: 0 0.5rem;

    h2 {
        margin-top: 0;
        text-transform: uppercase;
        font-weight: normal;
    }
`

export const CardElementWrap = styled.div`
    padding: 1.1rem 5px;
    border: 1px solid black;
    box-shadow: 0px 0px 4px palegoldenrod;
`

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 1.5rem;
`