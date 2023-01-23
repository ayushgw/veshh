import styled from "styled-components";

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: 0.15s all ease-out;

    &:not(.nohover):hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }

    &:disabled,
    &[disabled] {
        border: 1px solid #999999;
        background-color: #ededed;
        color: #666666;
        cursor: default;
    }
`

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #4285f4;
    color: white;

    &:not(.nohover):hover {
        background-color: #3071da;
        border: none;
        color: white;
    }
`

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:not(.nohover):hover {
        background-color: black;
        color: white;
        border: none;
    }
`