import { UPDATE_ANALISYS_REQUEST, UPDATE_ANALISYS_FAIL, UPDATE_ANALISYS_SUCCESSFUL } from "../actions/updateAnalisysAction";

const initState = {
    message: "",
    isFetching: false,
    error: ""
}

export const updateAnalisys = (state = initState, action) => {
    switch(action.type) {
        case UPDATE_ANALISYS_REQUEST: 
            return { ...state, message: action.payload, isFetching: true, error: "" }

        case UPDATE_ANALISYS_FAIL: 
            return { ...state, message: "", isFetching: false, error: action.payload }

        case UPDATE_ANALISYS_SUCCESSFUL:
            return { ...state, message: action.payload, isFetching: false, error: "" }

        default: 
            return state;
    }
}