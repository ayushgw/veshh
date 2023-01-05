import React from 'react'
import { Link } from 'react-router-dom'

import LogoPng from '../../assets/logo.png'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'

import { signOutUser } from '../../utils/firebase/firebase'

import { StyledNavbar, LogoImage, NavLink, NavLinks } from './styles'

import { useSelector } from 'react-redux'

const Navbar = () => {
  const { user } = useSelector(store => store.user);
  const { isCartOpen } = useSelector(store => store.cart);

  return (
    <StyledNavbar>
      <Link to="/">
        <LogoImage src={LogoPng} alt="logo" />
      </Link>
      <NavLinks>
      {
        user &&
        (<span style={{background: "#fafa4a4d", padding: "5px"}}>
          {'Hi, ' + (user.displayName || user.email)}
        </span>)
      }
        <NavLink to="/shop">shop</NavLink>
        {user
          ? (<NavLink as='span' onClick={signOutUser}>sign out</NavLink>)
          : (<NavLink to="/auth">login</NavLink>)
        }
        <CartIcon />
      </NavLinks>
      {isCartOpen
        ? <CartDropdown />
        : null
      }
    </StyledNavbar>
  )
}

export default Navbar