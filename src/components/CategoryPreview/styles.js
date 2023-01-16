import styled from 'styled-components'

export const CatgeoryPreviewStyled = styled.div`
    display: flex;
    flex-direction: column;
    ${'' /* margin-bottom: 2rem; */}
`

export const Title = styled.span`
    font-size: 1.8rem;
    text-shadow: -1px -1px 0 #874afa4d, 1px -1px 0 #874afa4d, -1px 1px 0 #874afa4d, 1px 1px 0 #874afa4d;
    cursor: pointer;
`

export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: auto;
    column-gap: 1.25rem;

    @media (max-width: 1150px) {
        grid-template-columns: repeat(3, auto);
    }

    @media (max-width: 850px) {
        grid-template-columns: repeat(2, auto);
    }
    
    ${'' /* @media (max-width: 600px) {
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: center;
    } */}
`