import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Input from "./Components/UserInterface/Elements/Input";
import * as InputTypes from "./Constants/InputTypes";
import {REQUIRED} from "./Constants/ValidationRules";
import Select from "./Components/UserInterface/Elements/Select";
import {useState} from "react";
import Form from "./Components/UserInterface/Form/Form";

function App() {

    const [controls, setControls] = useState({
        firstName:{
            type: InputTypes.TEXT,
            label: 'First Name',
            placeholder: 'Enter First name',
            className: '',
            value: '',
            validation: {
                [REQUIRED]: true
            },
            invalidMessage: '',
            isValid: false,
        },
        lastName:{
            type: InputTypes.TEXT,
            label: 'Last Name',
            placeholder: 'Enter Last name',
            className: '',
            value: '',
            validation: {

            },
            invalidMessage: '',
            isValid: true,
        },
        gender:{
            type: InputTypes.SELECT,
            label: 'Gender',
            defaultOption: 'Choose One',
            options: [
                {text: 'male', value: 1},
                {text: 'female', value: 2},
            ],
            className: '',
            value: '',
            validation: {
                [REQUIRED]: true
            },
            invalidMessage: '',
            isValid: false,
        }
    })

  return (
    <div className="App">
     <div className='row'>
         <div className='col-md-6 offset-md-3'>
           <div className='card'>
               <div className='card-body'>
                  <Form
                      controls={controls}
                      setControls={setControls}
                  />
               </div>
           </div>
         </div>
     </div>
    </div>
  );
}

export default App;
