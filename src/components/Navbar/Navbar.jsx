import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import LogoPng from '../../assets/logo.png'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'

import { signOutStart } from '../../features/userSlice'

import { StyledNavbar, LogoImage, NavLink, NavLinks } from './styles'

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(store => store.user);
  const { isCartOpen } = useSelector(store => store.cart);

  const isUserPresent = user && (user.displayName || user.email);

  return (
    <StyledNavbar>
      <Link to="/">
        <LogoImage src={LogoPng} alt="logo" />
      </Link>
      <NavLinks>
        {
          isUserPresent &&
          (<span style={{ background: "#fafa4a4d", padding: "5px" }}>
            {'Hi, ' + (user.displayName || user.email)}
          </span>)
        }
        <NavLink to="/shop">shop</NavLink>
        {user
          ? (<NavLink as='span' onClick={() => dispatch(signOutStart())}>sign out</NavLink>)
          : (<NavLink to="/auth">login</NavLink>)
        }
        <CartIcon />
      </NavLinks>
      {/* {isCartOpen
        ? <CartDropdown />
        : null
      } */}
      <CartDropdown isCartOpen={isCartOpen} />
    </StyledNavbar>
  )
}

export default Navbar