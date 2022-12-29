import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { ReactComponent as WarningImage } from '../../assets/warning-error.svg'

export const CategoryTitle = styled.h2`
    font-size: 28px;
    margin-bottom: 40px;
    text-align: center;
`

export const CategoryProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
`

export const Error = styled.div`
    margin-top: 6rem;
    text-align: center;
`

export const ErrorImage = styled(WarningImage)`
    height: 35px;
    width: 35px;
`

export const ErrorText = styled.p`
    margin-top: 10px;
    margin-bottom: 20px;
`

export const ErrorLink = styled(Link)`
    color: #5c8fda;
    margin-top: 20px;
`