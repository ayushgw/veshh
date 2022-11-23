import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/UserContext'
import { signOutUser } from '../../utils/firebase/firebase'


import './Navbar.scss'

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  
  const signOutHandler = async() => {
    await signOutUser();
    setCurrentUser(null);
  }

  return (
    <div className="navbar">
      <Link className="logo-container" to="/">
        <Logo className='logo' />
      </Link>
      <div className="nav-links">
        <Link className="nav-link" to="/shop">shop</Link>

        { currentUser
          ? (<span className="nav-link" onClick={signOutHandler}>sign out</span>)
          : (<Link className="nav-link" to="/auth">login</Link>)
        }
      </div>
    </div>
  )
}

export default Navbar