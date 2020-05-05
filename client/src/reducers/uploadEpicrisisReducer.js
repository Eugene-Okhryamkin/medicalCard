import { UPLOAD_EPICRISIS_REQUEST, UPLOAD_EPICRISIS_SUCCESSFUL, UPLOAD_EPICRISIS_FAIL } from "../actions/uploadEpicrisisAction";

const initState = {
    epicrisis: null,
    isFetching: false,
    error: ""
}

export const uploadEpicrisis = (state = initState, action) => {
    switch(action.type) {

        case UPLOAD_EPICRISIS_REQUEST: 
            return { ...state, epicrisis: action.payload, isFetching: true, error: "" }

        case UPLOAD_EPICRISIS_FAIL: 
            return { ...state, epicrisis: null, isFetching: false, error: action.payload }
            
        case UPLOAD_EPICRISIS_SUCCESSFUL: 
            return { ...state, epicrisis: action.payload, isFetching: false, error: "" }    

        default: 
            return state;
    }
}