import React from 'react';
// import Input from '../UI/Input/Input';
// import Button from '../UI/Button/Button';
// import classes from './EmployeeForm.module.css';
import { Form, FormGroup, Label, FormFeedback, Input } from 'reactstrap';
import { checkValidity } from '../CheckValidation/CheckValidation';
import * as actions from '../../store/actions/actions'
import { connect } from 'react-redux';
import { useState } from 'react';


const EmployeeForm = (props) => {
    const [validName, setValidName] = useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [validNumber, setValidNumber] = useState(false)
    const [validAddress, setValidAddress] = useState(false)
    const [validWebiste, setValidWebsite] = useState(false)


    const onChangeRecordHandler = (event) => {

        let updatedRecord = { ...props.Record };

        const inputName = event.target.name;
        const inputValue = event.target.value;
        updatedRecord[inputName] = inputValue;
        props.onChangeRecord(updatedRecord);

        if (checkValidity(inputName, inputValue)) {
            inputName === "name" && setValidName(true)
            inputName === "email" && setValidEmail(true)
            inputName === "number" && setValidNumber(true)
            inputName === "text" && setValidAddress(true) 
            inputName === "website" && setValidWebsite(true)
        }
    }

return (
    <Form>
        <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input value={props.Record.name || ''} type="text" name="name" id="exampleName" placeholder="with a placeholder" invalid={!validName} onChange={(event) => onChangeRecordHandler(event)} />
                <FormFeedback valid>Sweet! that name is available</FormFeedback>
            </FormGroup>
        <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input value={props.Record.email || ''} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" invalid={!validEmail} onChange={(event) => onChangeRecordHandler(event)} />
            <FormFeedback valid>Sweet! that name is available</FormFeedback>
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">Phone</Label>
            <Input value={props.Record.number || ''} type="number" name="number" id="examplePassword" placeholder="password placeholder" invalid={!validNumber} onChange={(event) => onChangeRecordHandler(event)} />
        </FormGroup>
        <FormGroup>
            <Label for="exampleText">Address</Label>
            <Input value={props.Record.text || ''} type="textarea" name="text" id="exampleText" invalid={!validAddress} onChange={(event) => onChangeRecordHandler(event)} />
        </FormGroup>
        <FormGroup>
            <Label for="exampleText">Website</Label>
            <Input value={props.Record.website || ''} type="text" name="website" id="exampleWebsite" invalid={!validWebiste} onChange={(event) => onChangeRecordHandler(event)} />
        </FormGroup>

    </Form>
);
}




// <div className={classes.EmployeeForm}>

//     <form>
//         <Input type="text"
//             placeholder="Enter your name...."
//             name="name"
//             label="Employee Name:"
//             value={props.recordToEdit.name || ''}
//             onChange={props.changeInput} />
//         <Input type="text"
//             placeholder="Enter job title...."
//             name="jobTitle"
//             label="Employee Job Title: "
//             value={props.recordToEdit.jobTitle || ''}
//             onChange={props.changeInput} />
//         <Input type="number"
//             placeholder="Enter mobile number..."
//             name="mobileNumber"
//             label="Employee Mobile Number: "
//             value={props.recordToEdit.mobileNumber || ''}
//             onChange={props.changeInput} />
//         <Button
//             btnType="Success"
//             clicked={props.Record}
//         >
//             {props.pressedEditButton ? 'Update' : 'Add'}
//         </Button>

//     </form>
// </div>x

const mapStateToProps = state => {
    return {
        Record: state.Record,
        Details: state.Details

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeRecord: (updatedRecord) => dispatch(actions.ChangeRecord(updatedRecord)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);