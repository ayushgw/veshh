import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { AuthError, AuthErrorCodes } from 'firebase/auth';

import FormInput from '../FormInput/FormInput'
import Button, { BUTTON_TYPES } from '../Button/Button';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { googleSignInStart, emailSignInStart, resetError } from '../../features/userSlice';
import { closeModal, openModal } from '../../features/modalSlice';

import { FormButtons, FormStyled, Heading } from './styles'

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const dispatch = useAppDispatch();
    const { signinError } = useAppSelector(store => store.user);

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    useEffect(() => {
        if (signinError as AuthError) {
            const content = new Map();
            content.set('buttonText', 'okay');
            content.set('buttonCallback', () => {
                dispatch(closeModal());
                dispatch(resetError());
            });

            let errorMsg = '';
            if((signinError as AuthError).code === AuthErrorCodes.USER_DELETED) {
                errorMsg = "Trouble signing in, email does not exist!";
            } else if((signinError as AuthError).code === AuthErrorCodes.INVALID_PASSWORD) {
                errorMsg = "Trouble signing in, please check your password!";
            } else {
                errorMsg = "Trouble signing in, please check your email and/or password!"
            }
            
            content.set('text', errorMsg);
            dispatch(openModal({ type: 'alert', content, closeOnBackdropClick: false }))
        }
    }, [signinError, dispatch]);

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(emailSignInStart({ email, password }));
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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