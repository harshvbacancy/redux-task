import * as actionTypes from '../actions/actionTypes'

const intialState = {
    Details: [],
    Record: {},
    pressedEditButton: false,
}

const reducer = (state = intialState, action) => {
    switch (action.type) {

        case actionTypes.ADD_OR_EDIT_RECORD:
            let tempRecord = { ...action.user }
            tempRecord['index'] = action.id;
            return {
                ...state,
                Record: tempRecord,
                pressedEditButton: action.buttonPressed

            }

        case actionTypes.RECORD_HANDLER:

            let index = state.Record.index
               let userRecords = [...state.Details];
               console.log(state.Record)

            if (index === -1) {
                userRecords.push(action.TempRecord)
            }   
            else {
                const updatedState = [...state.Details]
                const indexpostition = updatedState.findIndex(detail => detail.id === index)
                userRecords[indexpostition] = action.TempRecord
            }
            return {
                ...state,
                Details: userRecords

            }

        case actionTypes.CHANGE_RECORD:
            return {
                ...state,
                Record: action.updatedRecord,
            }

        case actionTypes.DELETE_RECORD:
            
            return {
                ...state,
                Details: state.Details.filter(detail => detail.id !== action.id)
 
            }

        default:
            return state
    }

}

export default reducer;