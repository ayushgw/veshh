import React, { useContext } from 'react'

import { ReactComponent as LogoImage } from '../../assets/crown.svg'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'

import { UserContext } from '../../contexts/UserContext'
import { CartContext } from '../../contexts/CartContext'
import { signOutUser } from '../../utils/firebase/firebase'

import { StyledNavbar, Logo, NavLink, NavLinks } from './styles'

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <StyledNavbar>
      <Logo to="/">
        <LogoImage className='logo' />
      </Logo>
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