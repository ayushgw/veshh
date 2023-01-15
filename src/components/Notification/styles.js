import styled from 'styled-components'

export const Wrap = styled.div`
    position: absolute;
    display: flex;
    align-items: start;
    justify-content: center;
    width: 100%;
    ${'' /* overflow: hidden; */}
    ${'' /* transition: all 0.2s ease-out; */}

    &.slide-enter {
        transform: translateY(-100%);
    }
    &.slide-enter-active {
        transform: translateY(0);
        transition: transform 300ms;
    }
    &.slide-exit {
        transform: translateY(0);
    }
    &.slide-exit-active {
        transform: translateY(-100%);
        transition: transform 300ms;
    }
`

export const Content = styled.span`
    background: #fafa4a4d;
    padding: 8px 20px;
    color: black;
    border-radius: 0 0 5px 5px;
    text-align: center;
    font-size: 15px;
`