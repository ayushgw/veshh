import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../FormInput/FormInput';
import Button, { BUTTON_TYPES } from '../Button/Button';

import { resetError, signUpStart } from '../../features/userSlice';
import { closeModal, openModal } from '../../features/modalSlice.ts';

import { SignUpContainer } from './styles'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { hasSignedUp, error } = useSelector(store => store.user);

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const fireModal = (errorText) => {
        const content = new Map();
        content.set('text', errorText);
        content.set('buttonText', 'okay');
        content.set('buttonCallback', () => {
            // setFormFields(defaultFormFields);
            dispatch(closeModal());
            dispatch(resetError());
        });

        const modalProps = { type: 'alert', content: content };
        dispatch(openModal(modalProps));
    }

    if (error && error.code === 'auth/email-already-in-use') {
        fireModal('Email is already registered. Try signing in.')
    }

    useEffect(() => {
        if (hasSignedUp) {
            navigate(0); // auto resets form fields
        }
    }, [hasSignedUp, navigate])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        dispatch(signUpStart({ displayName, email, password }));
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