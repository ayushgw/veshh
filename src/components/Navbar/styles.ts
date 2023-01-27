import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const StyledNavbar = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const LogoImage = styled.img`
  height: 100%;
  width: 140px;
  padding: 5px;
  padding-left: 20px;
`

export const Logo = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`

export const NavLinks = styled.div`
  width: 50 %;
  height: 100 %;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.2s all ease-in;
  
  &:hover {
    text-decoration: underline;
  }
`

export const Greeting = styled.span`
  background: #fafa4a4d;
  padding: 5px;

  @media (max-width: 600px) {
    display: none;
  }
`