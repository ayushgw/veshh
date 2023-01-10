import styled from 'styled-components'

export const ModalContainer = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalContent = styled.div`
    background: var(--clr-white);
    width: 80vw;
    max-width: 400px;
    border-radius: var(--radius);
    padding: 2rem 1rem;
    text-align: center;
    background: white;

    & > h4 {
        margin-top: 0;
        line-height: 1.5;
    }
`

export const ModalButtons = styled.div`
    display: flex;
    justify-content: space-around;
`