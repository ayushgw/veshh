import React, { useState } from 'react'

import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button';
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase';

import './SignInForm.scss'

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            alert('Sign In successful!');
            resetFormFields();
        } catch (error) {
            if(error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
                alert('Incorrect email and / or password');
            }
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <div className="sign-in-form">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <div className="sign-in-form__buttons">
                    <Button buttonType="" type="submit">Sign In</Button>
                    <Button buttonType="google" type="button" onClick={signInWithGoogle}>Sign In With Google</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm