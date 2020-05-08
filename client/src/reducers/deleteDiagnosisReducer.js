import { DELETE_DIAGNOSIS_REQUEST, DELETE_DIAGNOSIS_FAIL, DELETE_DIAGNOSIS_SUCCESSFUL } from "../actions/deleteDiagnosis";

const initState = {
    diagnosis: null,
    isFetching: false,
    error: ""
}

export const deleteDiagnosis = (state = initState, action) => {
    switch(action.type) {
        case DELETE_DIAGNOSIS_REQUEST:
            return { ...state, diagnosis: action.payload, isFetching: true, error: "" }

        case DELETE_DIAGNOSIS_FAIL:
            return { ...state, diagnosis: null, isFetching: false, error: action.payload }

        case DELETE_DIAGNOSIS_SUCCESSFUL:
            return { ...state, diagnosis: action.payload, isFetching: false, error: "" }

        default: 
            return state
    }
}