import React, { Component } from 'react';

import ModalPanel from '../../Components/ModalPanel/ModalPanel';
import DisplayDetails from '../../Components/DisplayDetails/DisplayDetails';
import * as actions from '../../store/actions/actions'
import { connect } from 'react-redux';

class Layout extends Component {
    state = {
        showModal: false,
    }

    setShowModel = (ModelState) => {
        this.setState({ showModal: ModelState });
    }

    // onChangeRecordHandler = (event) => {

    //     let updatedRecord = { ...this.props.Record };
    //     updatedRecord[event.target.name] = event.target.value;
    //     this.props.onChangeRecord(updatedRecord)

    // }

    RecordHandler = (event) => {
        event.preventDefault();
        let id = Math.random().toString(36).substr(2, 9)
        //console.log('Record', this.props.Record)
        let UserName = this.props.Record.name;
        let UserEmail = this.props.Record.email;
        let UserNumber = this.props.Record.number;
        let UserAddress = this.props.Record.text;
        let UserWebsite = this.props.Record.website;
        let TempRecord = {name: UserName, email: UserEmail, number: UserNumber, text: UserAddress, website: UserWebsite, id: id };

        //console.log(TempRecord)
        this.props.onRecordHandler(TempRecord);
        this.setShowModel(false);


    }

    deleteRecord = (id) => {
        if (window.confirm('Are you sure?')) {
            // let userRecords = [...this.props.Details];
            // userRecords.splice(index, 1);
            // this.setState({ Details: userRecords });

            this.props.onDeleteRecord(id)

        }

    }

    render() {

        const display = (
            <div>
                <h1 style={{ marginTop: '50px' }}>Employee Details</h1>
                <DisplayDetails
                    setShowModel={this.setShowModel}
                    onPressAddOrEditRecord={this.onPressAddOrEditRecord}
                    deleteRecord={this.deleteRecord} />
            </div>

        );

        const modelPanel = (
            <ModalPanel
                showModal={this.state.showModal}
                setShowModel={this.setShowModel}
                formRecord={this.RecordHandler}
            ></ModalPanel>
        )

        return (
            <div >
                {display}
                {modelPanel}

            </div>
        )
    }

}


const mapStateToProps = state => {
    return {
        Record: state.Record,
        Details: state.Details

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRecordHandler: (TempRecord) => dispatch(actions.RecordHandler(TempRecord)),
        onChangeRecord: (updatedRecord) => dispatch(actions.ChangeRecord(updatedRecord)),
        onDeleteRecord: (id) => dispatch(actions.DeleteRecord(id))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);