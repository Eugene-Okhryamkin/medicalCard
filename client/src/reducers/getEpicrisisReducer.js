import { EPICRISIS_REQUEST, EPICRISIS_SUCCESSFUL, EPICRISIS_FAIL } from "../actions/getEpicrisisAction";

const initState = {
    epicrisis: null,
    isFetching: false,
    error: "" 
}

export const getEpicrisis = (state = initState, action) => {
    switch(action.type) {
        case EPICRISIS_REQUEST:
            return { ...state, epicrisis: null, isFetching: true, error: "" }

        case EPICRISIS_FAIL:
            return { ...state, epicrisis: null, isFetching: false, error: action.payload }
        
        case EPICRISIS_SUCCESSFUL:   
            return { ...state, epicrisis: action.payload, isFetching: false, error: "" }
                
        default: 
            return state

    }
}