import React from 'react';
import Label from "./Label";
import {checkValidityClass} from "../../../Shared/utility";

const Select = ({name, label, required, invalidMessage, className, value, onChanged, defaultOption, options}) => {

    return (
        <div className="mb-3">
            <Label
                label={label}
                name={name}
                isRequired={required}
            />

            <select
                className={`${checkValidityClass(invalidMessage)} ${className ? className : `form-control form-control-sm`}`}
                id={name}
                required={required}
                value={value}
                onChange={onChanged}
                aria-describedby={`invalid_${name}`}>
                <option value="">{defaultOption ? defaultOption : '--Select--'}</option>
                {options.map(({text, value}) => (
                    <option key={value} value={value}>{text}</option>
                ))}
            </select>

            <div id={`invalid_${name}`} className="invalid-feedback">
                {invalidMessage}
            </div>
        </div>
    );
};

export default Select;