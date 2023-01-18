import styled from 'styled-components'

export const ModalContainer = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 10;

    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    opacity: ${props => (props.isOpen ? 1 : 0)};
    transition: 0.1s all ease-in;
`

export const ModalContent = styled.div`
    width: 80vw;
    max-width: 25rem;
    border-radius: ;
    padding: 2rem 1rem;
    text-align: center;
    background: white;
    z-index: 99;

    transform: ${props => (props.isOpen ? 'scale(1)' : 'scale(0.7)')};
    transition: 0.15s all ease-in;

    & > h4 {
        margin-top: 0;
        line-height: 1.5;
    }
`

export const ModalButtons = styled.div`
    display: flex;
    justify-content: space-around;
`