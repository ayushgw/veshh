import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="logo" to="/">LOGO</Link>
      <div className="nav-links">
        <Link className="nav-link" to="shop">SHOP</Link>
        {/* <Link className="nav-link"></Link> */}
      </div>
    </div>
  )
}

export default Navbar