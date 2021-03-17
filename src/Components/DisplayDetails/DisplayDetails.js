import React from "react";
import classes from './DisplayDetails.module.css'
import Button from '../UI/Button/Button'
import * as actions from '../../store/actions/actions'
import { connect } from 'react-redux';

const DisplayDetails = (props) => {
    console.log('Details',props.Details)
    let details = [...props.Details];
    let data = details.map((user) => (
        <tr key={user.id}>

            <td style={{ width: '15%' }}>{user.name}</td>
            <td style={{ width: '15%' }}>{user.email}</td>
            <td style={{ width: '15%' }}>{user.number}</td>
            <td style={{ width: '15%' }}>{user.text}</td>
            <td style={{ width: '15%' }}>{user.website}</td>
            <td style={{ width: '25%' }}>
                <Button clicked={() => { props.setShowModel(true); props.onPressAddOrEditRecord(user, user.id, true) }} btnType='Success'>
                    Edit
            </Button>
                <Button clicked={() => { props.deleteRecord(user.id) }} btnType='Danger'>
                    Delete
            </Button>
            </td>
        </tr>
    ))

    return (
        <div>
            <table className={classes.DisplayDetail}>
                <tbody>
                    <tr>
                        <th>Name</th><th>Email</th><th>Number</th><th>Address</th><th>Website</th><th>Actions</th>
                    </tr>
                    {data}
                </tbody>
            </table>

            <Button clicked={() => { props.setShowModel(true); props.onPressAddOrEditRecord({}, -1, false) }} btnType='Primary'>
                + Add
            </Button>
        </div>


    );
}

const mapStateToProps = state => {
    return {
        Record: state.Record,
        Details: state.Details
    
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPressAddOrEditRecord: (user, id, buttonPressed) => dispatch(actions.AddorEditRecord(user, id, buttonPressed))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)( DisplayDetails);