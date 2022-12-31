import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import LogoPng from '../../assets/logo.png'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'

import { UserContext } from '../../contexts/UserContext'
import { CartContext } from '../../contexts/CartContext'
import { signOutUser } from '../../utils/firebase/firebase'

import { StyledNavbar, LogoImage, NavLink, NavLinks } from './styles'

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <StyledNavbar>
      <Link to="/">
        <LogoImage src={LogoPng} alt="logo" />
      </Link>
      <NavLinks>
        <NavLink to="/shop">shop</NavLink>
        {currentUser
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