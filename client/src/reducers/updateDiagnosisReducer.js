import { UPDATE_DIAGNOSIS_REQUEST, UPDATE_DIAGNOSIS_SUCCESSFUL, UPDATE_DIAGNOSIS_FAIL } from "../actions/updateDiagnosis";

const initState = {
    diagnosis: null,
    isFetching: false,
    error: ""
}

export const updateDiagnosis = (state = initState, action) => {
    switch(action.type) {
        case UPDATE_DIAGNOSIS_REQUEST:
            return { ...state, diagnosis: action.payload, isFetching: true, error: "" }

        case UPDATE_DIAGNOSIS_FAIL:
            return { ...state, diagnosis: null, isFetching: false, error: action.payload }

        case UPDATE_DIAGNOSIS_SUCCESSFUL:
            return { ...state, diagnosis: action.payload, isFetching: false, error: "" }

        default: 
            return state;
    }
}