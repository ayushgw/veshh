import React from 'react'

import { BaseButton, GoogleSignInButton, InvertedButton } from './styles'

export const BUTTON_TYPES = {
    base: BaseButton,
    google: GoogleSignInButton,
    inverted: InvertedButton
}

const Button = ({ children, buttonType, ...buttonProps }) => {
    const CustomButton = buttonType;

    return (
        <CustomButton {...buttonProps}>
            {children}
        </CustomButton>
    )
}

export default Button