import styled from "styled-components";

export const Wrap = styled.div`
  overflow: hidden;
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`

export const Background = styled.div`
  opacity: 0.6;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: white;
`

export const Content = styled.div`
  position: relative;
`