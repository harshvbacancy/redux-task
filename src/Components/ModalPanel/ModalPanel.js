import React from 'react';
// import classes from "./ModalPanel.module.css";
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';


// const ModalPanel = (props) => {
//     let myModel = (
//         <div>
//             <Model isOpen = {props.showModal} toggle={props.setShowModel} >            
//                 <EmployeeForm
//                     changeInput={props.formChangeInput}
//                     Record={props.formRecord}
//                     recordToEdit={props.recordToEdit}
//                     pressedEditButton={props.pressedEditButton}
//                 />
//             </Model>

//         </div>
//     );
//     return (
//         <div>
//                 {myModel}

//         </div>
//     );
// }


const ModalPanel = (props) => {

    const toggle = () => props.setShowModel(!props.showModal);

    return (
        <div>
            <Modal isOpen={props.showModal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Form</ModalHeader>
                <ModalBody>
                    <EmployeeForm />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={props.formRecord}>{props.pressedEditButton ? 'Update' : 'Add'}</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        pressedEditButton: state.pressedEditButton

    }
}

export default connect(mapStateToProps)(ModalPanel);




