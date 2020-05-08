import { ADD_DIAGNOSIS_REQUEST, ADD_DIAGNOSIS_SUCCESSFUL, ADD_DIAGNOSIS_FAIL } from "../actions/addDiagnosis";

const initState = {
    diagnosis: null,
    isFetching: false,
    error: ""
}

export const addDiagnosis = (state = initState, action) => {
    switch(action.type) {
        case ADD_DIAGNOSIS_REQUEST: 
            return { ...state, diagnosis: action.payload, isFetching: true, error: "" }

        case ADD_DIAGNOSIS_FAIL:
            return { ...state, diagnosis: null, isFetching: false, error: action.payload }

        case ADD_DIAGNOSIS_SUCCESSFUL: 
            return { ...state, diagnosis: action.payload, isFetching: false, error: "" }


        default: 
            return state;
    }
}