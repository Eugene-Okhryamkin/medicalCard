import { DELETE_ANALISYS_REQUEST, DELETE_ANALISYS_FAIL, DELETE_ANALISYS_SUCCESSFUL } from "../actions/deleteAnalisysAction";

const initState = {
    message: "",
    isFetching: false,
    error: ""
}

export const deleteAnalisys = (state = initState, action) => {
    switch(action.type) {
        case DELETE_ANALISYS_REQUEST: 
            return { ...state, message: action.payload, isFetching: true, error: "" }

        case DELETE_ANALISYS_FAIL: 
            return { ...state, message: "", isFetching: false, error: action.payload }

        case DELETE_ANALISYS_SUCCESSFUL:
            return { ...state, message: action.payload, isFetching: false, error: "" }

        default: 
            return state;
    }
}