import React from 'react'

import { signInWithGooglePopup } from '../../utils/firebase/firebase'

const Login = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }
  return (
    <>
      <h1>Login Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
    </>
  )
}

export default Login