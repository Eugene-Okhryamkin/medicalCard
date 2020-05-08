import { GET_DIAGNOSIS_REQUEST, GET_DIAGNOSIS_SUCCESSFUL, GET_DIAGNOSIS_FAIL } from "../actions/getDiagnosis";

const initState = {
    diagnosis: [],
    isFetching: false,
    error: ""
}

export const getDiagnosis = (state = initState, action) => {
    switch(action.type) {
        case GET_DIAGNOSIS_REQUEST:
            return { ...state, diagnosis: action.payload, isFetching: true, error: "" }
          
        case GET_DIAGNOSIS_FAIL:
            return { ...state, diagnosis: [], isFetching: false, error: action.payload }
        
        case GET_DIAGNOSIS_SUCCESSFUL:
            return { ...state, diagnosis: action.payload, isFetching: false, error: "" }
        
        default: 
            return state;
    }
}