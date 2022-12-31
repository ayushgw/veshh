import styled from 'styled-components'
import { BaseButton, GoogleSignInButton, InvertedButton } from '../Button/styles'

export const DropdownBackdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #57505094;
    z-index: 9;
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

export const Dropdown = styled.div`
    position: absolute;
    width: 300px;
    height: 440px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 10;

    ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
        text-transform: uppercase;
    }
`

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`

export const Items = styled.div`
    height: 275px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`