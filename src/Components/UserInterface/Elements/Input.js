import React from 'react';
import Label from "./Label";
import {checkValidityClass} from "../../../Shared/utility";

const Input = ({name, label, type, placeholder, className, required, invalidMessage, value, onChanged}) => {

    return (
        <div className="mb-3">
            <Label
                label={label}
                name={name}
                isRequired={required}
            />
            <input
                type={type}
                className={`${checkValidityClass(invalidMessage)} ${className ? className : 'form-control'}`}
                id={name}
                placeholder={placeholder}
                required={required}
                value={value}
                aria-describedby={`invalid_${name}`}
                onChange={onChanged}
            />
            <div id={`invalid_${name}`} className="invalid-feedback">
                {invalidMessage}
            </div>
        </div>
    );
};

export default Input;