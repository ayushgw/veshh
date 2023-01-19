import styled from 'styled-components'

export const ModalWrap = styled.aside`
    position: fixed;
    height: 100%;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;

    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    opacity: ${props => (props.isOpen ? 1 : 0)};
    transition: 0.1s all ease-in;
`

export const ModalBackdrop = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #57505094;
    z-index: 10;
`

export const ModalContent = styled.div`
    position: relative;
    width: 80vw;
    max-width: 25rem;
    border-radius: ;
    padding: 2rem 1rem;
    text-align: center;
    background: white;
    z-index: 999;

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