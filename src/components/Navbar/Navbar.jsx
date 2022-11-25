import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as LogoImage } from '../../assets/crown.svg'
import CartIcon from '../CartIcon/CartIcon'

import { UserContext } from '../../contexts/UserContext'
import { signOutUser } from '../../utils/firebase/firebase'

import './Navbar.scss'

const Navbar = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="navbar">
      <Link className="logo-container" to="/">
        <LogoImage className='logo' />
      </Link>
      <div className="nav-links">
        <Link className="nav-link" to="/shop">shop</Link>
        { currentUser
          ? (<span className="nav-link" onClick={signOutUser}>sign out</span>)
          : (<Link className="nav-link" to="/auth">login</Link>)
        }
        <CartIcon />
      </div>
    </div>
  )
}

export default Navbar