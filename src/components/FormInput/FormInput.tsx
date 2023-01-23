import { InputHTMLAttributes, FC } from 'react'

import { FormGroup, Input, Label } from './styles';

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...inputProps }) => {
    return (
        <FormGroup>
            <Input {...inputProps} />
            {label ? (
                <Label shrink={Boolean(inputProps.value && typeof inputProps.value === 'string' && inputProps.value.length)}>{label}</Label>
            ) : null}
        </FormGroup>
    )
}

export default FormInput