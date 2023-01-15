import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../FormInput/FormInput';
import Button, { BUTTON_TYPES } from '../Button/Button';

import { signUpStart } from '../../features/userSlice';

// import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';

import { SignUpContainer } from './styles'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const dispatch = useDispatch();
    const { hasSignedUp } = useSelector(store => store.user)

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    useEffect(() => {
        if (hasSignedUp) {
            alert('Signed up successfully. You can login now.'); //TODO: change into custom modal
            setFormFields(defaultFormFields); // reset form fields
            window.location.reload();
        }
    }, [hasSignedUp])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            dispatch(signUpStart({ displayName, email, password }));
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use!');
            } else {
                console.log('user creation error', error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <Button buttonType={BUTTON_TYPES.base} type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm