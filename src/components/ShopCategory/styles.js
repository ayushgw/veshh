import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { ReactComponent as WarningImage } from '../../assets/warning-error.svg'

export const CategoryTitle = styled.h2`
    font-size: 1.8rem;
    text-shadow: -1px -1px 0 #874afa4d, 1px -1px 0 #874afa4d, -1px 1px 0 #874afa4d, 1px 1px 0 #874afa4d;
    margin-bottom: 2.5rem;
    text-align: center;
`

export const CategoryProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: auto;
    column-gap: 1.25rem;
    row-gap: 3.2rem;

    @media (max-width: 1150px) {
        grid-template-columns: repeat(3, auto);
    }

    @media (max-width: 850px) {
        grid-template-columns: repeat(2, auto);
    }
`

export const Error = styled.div`
    margin-top: 6rem;
    text-align: center;
`

export const ErrorImage = styled(WarningImage)`
    height: 2.2rem;
    width: 2.2rem;
`

export const ErrorText = styled.p`
    margin-top: 0.65rem;
    margin-bottom: 20px;
`

export const ErrorLink = styled(Link)`
    color: #5c8fda;
    margin-top: 0.125rem;
`