import styled, { keyframes } from 'styled-components'
import { BaseButton, GoogleSignInButton, InvertedButton } from '../Button/styles'
import { CartDropdownProps } from './CartDropdown'

const dropdownAnimation = keyframes`
    from {
        transform: translateY(-10px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`

export const DropdownBackdrop = styled.div<CartDropdownProps>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #57505094;
    z-index: 9;

    visibility: ${({ isCartOpen }) => isCartOpen ? 'visible' : 'hidden'};
    opacity: ${({ isCartOpen }) => isCartOpen ? 1 : 0};
    transition: 0.1s all ease-in;
`

export const Dropdown = styled.div<CartDropdownProps>`
    position: absolute;
    width: 20rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    border: 1px solid black;
    background-color: white;
    top: 5.5rem;
    right: 3.5rem;
    z-index: 10;
    
    ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
        text-transform: uppercase;
    }
    
    animation: ${dropdownAnimation} 0.2s ease-in-out;
    transform-origin: top right;
    display: ${({ isCartOpen }) => isCartOpen ? 'flex' : 'none'};
`

export const LinkButton = styled.button`
    background: none;
    outline: none;
    border: none;
    color: #1e83da;
    margin-bottom: 10px;
    padding: 10px;
    cursor: pointer;
    margin-top: auto;
    font-size: 16px;
`

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`

export const Items = styled.div`
    height: 20rem;
    display: flex;
    flex-direction: column;
    overflow: auto;
`

export const Subtotal = styled.div`
    text-align: right;
    margin-bottom: 1rem;
    padding-bottom: 0.6rem;
    border-bottom: 1px solid black;
    font-size: 1rem;
`