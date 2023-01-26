import { Link } from 'react-router-dom'

import LogoPng from '../../assets/logo.png'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { signOutStart } from '../../features/userSlice'

import { StyledNavbar, LogoImage, NavLink, NavLinks } from './styles'

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(store => store.user);
  const { isCartOpen } = useAppSelector(store => store.cart);

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
        {isUserPresent
          ? (<NavLink as='span' onClick={() => dispatch(signOutStart())}>sign out</NavLink>)
          : (<NavLink to="/auth">login</NavLink>)
        }
        <CartIcon />
      </NavLinks>
      <CartDropdown isCartOpen={isCartOpen} />
    </StyledNavbar>
  )
}

export default Navbar