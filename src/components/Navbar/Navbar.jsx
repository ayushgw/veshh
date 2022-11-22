import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="logo-container" to="/">
        <Logo className='logo' />
      </Link>
      <div className="nav-links">
        <Link className="nav-link" to="/shop">shop</Link>
        <Link className="nav-link" to="/auth">login</Link>
      </div>
    </div>
  )
}

export default Navbar