import styled from 'styled-components'

export const Wrap = styled.div`
    position: absolute;
    display: flex;
    align-items: start;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.2s ease-out;
`

export const Content = styled.span`
    background: #fafa4a4d;
    padding: 8px 20px;
    color: black;
    border-radius: 0 0 5px 5px;
    text-align: center;
    font-size: 15px;

    &
`