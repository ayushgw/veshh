import React from 'react'

import { signInWithGooglePopup,createUserDocumentFromAuth } from '../../utils/firebase/firebase'

const Login = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  return (
    <>
      <h1>Login Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
    </>
  )
}

export default Login