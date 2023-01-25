import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

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
    const { hasSignedUp, signupError } = useAppSelector(store => store.user);

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    useEffect(() => {
        if (signupError as AuthError) {
            const content = new Map();
            content.set('buttonText', 'okay');
            content.set('buttonCallback', () => {
                dispatch(closeModal());
                dispatch(resetError());
            });

            let errorMsg = '';
            if((signupError as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
                errorMsg = "Trouble signing in, email already in use!";
            } else if((signupError as AuthError).code === AuthErrorCodes.WEAK_PASSWORD) {
                errorMsg = "Trouble signing up, password must be atleast 6 characters!";
            } else {
                errorMsg = "Trouble signing up, please try again later!"
            }

            content.set('text', errorMsg);
            dispatch(openModal({ type: 'alert', content, closeOnBackdropClick: false }))
        }
    }, [signupError, dispatch]);

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