import * as actionTypes from './actionTypes'

export const AddorEditRecord = (user,id, buttonPressed) => {
    return {
        type: actionTypes.ADD_OR_EDIT_RECORD,
        user: user,
        id: id,
        buttonPressed: buttonPressed
    }  
}

export const RecordHandler = (TempRecord) => {
    return {
        type: actionTypes.RECORD_HANDLER,
        TempRecord: TempRecord,
    
    }
}

export const ChangeRecord = (updatedRecord) => {
    return {
        type: actionTypes.CHANGE_RECORD,
        updatedRecord: updatedRecord
    }
}

export const DeleteRecord = (id) => {
    return {
        type: actionTypes.DELETE_RECORD,
        id:id
    }
}

