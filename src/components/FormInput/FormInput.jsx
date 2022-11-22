import React from 'react'

import './FormInput.scss'

const FormInput = ({ label, ...inputProps }) => {
    return (
        <div className="form-group">
            <input className="form-group__input" {...inputProps} />
            {label ? (
                <label className={`form-group__label ${inputProps.value.length ? 'shrink' : ''}`}>{label}</label>
            ) : null}
        </div>
    )
}

export default FormInput