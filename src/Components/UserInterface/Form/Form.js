import React, {useState} from 'react';
import Select from "../Elements/Select";
import {SELECT} from "../../../Constants/InputTypes";
import Input from "../Elements/Input";
import {checkValidation} from "../../../Shared/utility";

const Form = ({controls, setControls, btnText}) => {

    const [isFormValid, setFormValidation] = useState(false);

    let formControls = [];
    for (let controlName in controls){
        formControls.push({
            name: controlName,
            config: controls[controlName]
        });
    }

    const onInputChangedHandler = (event, controlName) => {
        const updatedControls = {...controls};

        updatedControls[controlName] = {
            ...updatedControls[controlName],
            value: event.target.value,
            ...checkValidation(event.target.value, updatedControls[controlName].validation, updatedControls[controlName].label)
        };

        let isFormValid = true;
        for (let controlName in updatedControls){
            isFormValid = updatedControls[controlName].isValid && isFormValid
        }
        setFormValidation(isFormValid);
        setControls(updatedControls);
    }

    return (
        <form onSubmit={() => {}}>
            {formControls.map(({name, config}, idx) => (
                <Control
                    key={idx}
                    name={name}
                    {...config}
                    onChanged={(event) => onInputChangedHandler(event, name)}
                />
            ))}
            <button disabled={!isFormValid} type="submit" className="btn btn-primary">{btnText ? btnText : 'Submit'}</button>
        </form>
    );
};

export default Form;


const Control = (props) => {
    switch (props.type){
        case SELECT:
            return <Select {...props}/>;
        default:
            return (
                <Input
                    {...props}
                />
            );
    }
}