import SignInForm from '../../components/SignInForm/SignInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

import './Auth.scss'

const Auth = () => {
  return (
    <div className="sign-in-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Auth