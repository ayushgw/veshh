import React from 'react'

import { FormGroup, Input, Label } from './styles'

const FormInput = ({ label, ...inputProps }) => {
    return (
        <FormGroup>
            <Input {...inputProps} />
            {label ? (
                <Label shrink={inputProps.value.length}>{label}</Label>
            ) : null}
        </FormGroup>
    )
}

export default FormInput