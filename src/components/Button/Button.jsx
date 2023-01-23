import { BaseButton, GoogleSignInButton, InvertedButton } from './styles'

import { ReactComponent as SpinnerSvg } from '../../assets/spinner.svg';

export const BUTTON_TYPES = {
    base: BaseButton,
    google: GoogleSignInButton,
    inverted: InvertedButton
}

const Button = ({ children, buttonType, isLoading, ...buttonProps }) => {
    const CustomButton = buttonType;

    return (
        <CustomButton disabled={isLoading} {...buttonProps}>
            {isLoading ? <SpinnerSvg /> : children}
        </CustomButton>
    )
}

export default Button