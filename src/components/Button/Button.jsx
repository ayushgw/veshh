import React from 'react'

import './Button.scss'

const BUTTON_TYPE_CLASSES = {
    google: 'button__google-sign-in',
    inverted: 'button__inverted'
}

const Button = ({ children, buttonType, ...buttonProps }) => {
    return (
        <button
            className={`button ${buttonType ? `${BUTTON_TYPE_CLASSES[buttonType]}` : ''}`}
            {...buttonProps}
        >
            {children}
        </button>
    )
}

export default Button