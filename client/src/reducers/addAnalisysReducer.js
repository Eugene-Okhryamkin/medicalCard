import { ADD_ANALISYS_REQUEST, ADD_ANALISYS_FAIL, ADD_ANALISYS_SUCCESSFUL } from "../actions/addAnalisysAction";

const initState = {
    analisys: [],
    isFetching: false,
    error: ""
}

export const addAnalisys = (state = initState, action) => {
    switch(action.type) {
        case ADD_ANALISYS_REQUEST: 
            return { ...state, analisys: action.payload, isFetching: true, error: "" }

        case ADD_ANALISYS_FAIL: 
            return { ...state, analisys: [], isFetching: false, error: action.payload }

        case ADD_ANALISYS_SUCCESSFUL:
            return { ...state, analisys: action.payload, isFetching: false, error: "" }

        default: 
            return state;
    }
}