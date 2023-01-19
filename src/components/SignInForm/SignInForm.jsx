import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FormInput from '../FormInput/FormInput'
import Button, { BUTTON_TYPES } from '../Button/Button';

import { googleSignInStart, emailSignInStart, resetError } from '../../features/userSlice';
import { closeModal, openModal } from '../../features/modalSlice';

import { FormButtons, FormStyled, Heading } from './styles'

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const dispatch = useDispatch();
    const { error } = useSelector(store => store.user);

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

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

    if (error && (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')) {
        fireModal('Could not sign in! Please check your email and/or password.')
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(emailSignInStart({ email, password }));
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <FormStyled>
            <Heading>I already have an account</Heading>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <FormButtons>
                    <Button buttonType={BUTTON_TYPES.base} type="submit">Sign In</Button>
                    <Button buttonType={BUTTON_TYPES.google} type="button" onClick={signInWithGoogle}>Sign In With Google</Button>
                </FormButtons>
            </form>
        </FormStyled>
    )
}

export default SignInForm