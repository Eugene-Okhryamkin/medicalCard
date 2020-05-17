import { DELETE_EPICRISIS_REQUEST, DELETE_EPICRISIS_FAIL, DELETE_EPICRISIS_SUCCESSFUL } from "../actions/deleteEpicrisisAction";

const initState = {
    epicrisis: null,
    isFetching: false,
    error: ""
}

export const deleteEpicrisis = (state = initState, action) => {
    switch(action.type) {
        case DELETE_EPICRISIS_REQUEST: 
            return { ...state, epicrisis: action.payload, isFetching: true, error: "" }

        case DELETE_EPICRISIS_FAIL: 
            return { ...state, epicrisis: null, isFetching: false, error: action.payload }

        case DELETE_EPICRISIS_SUCCESSFUL: 
            return { ...state, epicrisis: action.payload, isFetching: false, error: "" }

        default: 
            return state
    }
}