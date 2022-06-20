import * as ValidationRules from '../Constants/ValidationRules';

export  const checkValidityClass =(errorMessage)=>{
    if(errorMessage !== '')
        return 'is-invalid';
    return '';
}

export const checkValidation = (value, rules, label) => {
    let validStatus = {
        isValid: true,
        invalidMessage: ''
    };

    if(!rules){
        validStatus.isValid = true;
        return validStatus;
    }

    if(rules[ValidationRules.REQUIRED] && value !== null){
        if(!(value.length !== 0 && validStatus.isValid)){
            validStatus.isValid = false;
            validStatus.invalidMessage = label + " field is required!";
            return validStatus
        }
    }

    if(rules[ValidationRules.IS_EMAIL] && value !== null){
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!(value.match(regex)&& validStatus.isValid)){
            validStatus.isValid = false;
            validStatus.invalidMessage = label + " field is must be an email!";
            return validStatus
        }
    }

    if(rules[ValidationRules.IS_NUMBER]){
        if(!(!isNaN(value) && validStatus.isValid)){
            validStatus.isValid = false;
            validStatus.invalidMessage = label + " is must number value!"
            return validStatus
        }
    }
    if(rules[ValidationRules.LENGTH]){
        if(!(value.length === rules.length && validStatus.isValid)){
            validStatus.isValid = false;
            validStatus.invalidMessage = label + " field is must on "+ rules.length +" character!";
            return validStatus
        }
    }
    if(rules[ValidationRules.MIN_LENGTH]){
        if(!(value.length >= rules.minLength && validStatus.isValid)){
            validStatus.isValid = false;
            validStatus.invalidMessage = label + " must on " + rules.minLength+ " characters!"
            return validStatus
        }
    }


    if(rules[ValidationRules.VALID_EXTENSIONS]){

        const ext =  value.name.substring(value.name.lastIndexOf('.') + 1).toLowerCase();

        if(!rules[ValidationRules.VALID_EXTENSIONS].includes(ext)){
            validStatus.isValid = false;
            validStatus.invalidMessage = label + " is must " + rules[ValidationRules.VALID_EXTENSIONS].join(', ') +" extension !"
            return validStatus
        }
    }
    return validStatus;
}

export const reFormatForRequestBody = (controls) => {
    const formData = {};
    for (let formElementIdentifier in controls){
        formData[formElementIdentifier] = controls[formElementIdentifier].value;
    }
    return formData;
}