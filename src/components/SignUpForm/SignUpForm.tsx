import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import FormInput from '../FormInput/FormInput';
import Button, { BUTTON_TYPES } from '../Button/Button';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { resetError, signUpStart } from '../../features/userSlice';
import { closeModal, openModal } from '../../features/modalSlice';

import { SignUpContainer } from './styles'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { hasSignedUp, error } = useAppSelector(store => store.user);

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    // const fireModal = (errorText: string) => {
    //     const content = new Map();
    //     content.set('text', errorText);
    //     content.set('buttonText', 'okay');
    //     content.set('buttonCallback', () => {
    //         // setFormFields(defaultFormFields);
    //         dispatch(closeModal());
    //         dispatch(resetError());
    //     });

    //     const modalProps = { type: 'alert', content: content };
    //     dispatch(openModal(modalProps));
    // }

    useEffect(() => {
        if (error) {
            const content = new Map();
            content.set('text', "Could not sign up! Please check your credentials");
            content.set('buttonText', 'okay');
            content.set('buttonCallback', () => {
                dispatch(closeModal());
                dispatch(resetError());
            });
            dispatch(openModal({ type: 'alert', content, closeOnBackdropClick: false }))
        }
    }, [error, dispatch]);

    // if (error && error.code === 'auth/email-already-in-use') {
    //     fireModal('Email is already registered. Try signing in.')
    // }

    useEffect(() => {
        if (hasSignedUp) {
            navigate(0); // auto resets form fields
        }
    }, [hasSignedUp, navigate])

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        dispatch(signUpStart({ displayName, email, password }));
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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