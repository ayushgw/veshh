import { FC, ButtonHTMLAttributes } from 'react';

import { ReactComponent as SpinnerSvg } from '../../assets/spinner.svg';
import { BaseButton, GoogleSignInButton, InvertedButton } from './styles'

export enum BUTTON_TYPES {
    base = 'base',
    google = 'google',
    inverted = 'inverted'
}

const getButton = (buttonType = BUTTON_TYPES.base): typeof BaseButton => ({
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.google]: GoogleSignInButton,
    [BUTTON_TYPES.inverted]: InvertedButton,
}[buttonType]);

export type IButton = {
    buttonType?: BUTTON_TYPES;
    isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<IButton> = ({ children, buttonType, isLoading, ...buttonProps }) => {
    const CustomButton = getButton(buttonType);

    return (
        <CustomButton disabled={isLoading} {...buttonProps}>
            {isLoading ? <SpinnerSvg /> : children}
        </CustomButton>
    )
}

export default Button