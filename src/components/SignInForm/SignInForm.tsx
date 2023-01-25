import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

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
    const { error } = useAppSelector(store => store.user);

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // const fireModal = (errorText: string) => {
    //     const content = new Map();
    //     content.set('text', errorText);
    //     content.set('buttonText', 'okay');
    //     content.set('buttonCallback', () => {
    //         // setFormFields(defaultFormFields);
    //         dispatch(closeModal());
    //         dispatch(resetError());
    //     });

    //     const modalProps = { type: 'alert', content };
    //     dispatch(openModal(modalProps));
    // }

    useEffect(() => {
        if (error) {
            const content = new Map();
            content.set('text', "Could not sign in! Please check your email and/or password.");
            content.set('buttonText', 'okay');
            content.set('buttonCallback', () => {
                dispatch(closeModal());
                dispatch(resetError());
            });
            dispatch(openModal({ type: 'alert', content, closeOnBackdropClick: false }))
        }
    }, [error, dispatch]);

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