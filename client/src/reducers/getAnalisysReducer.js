import { GET_ANALISYS_REQUEST, GET_ANALISYS_FAIL, GET_ANALISYS_SUCCESSFUL } from "../actions/getAnalisysAction";

const initState = {
    analisys: [],
    isFetching: false,
    error: ""
}

export const getAnalisys = (state = initState, action) => {
    switch(action.type) {
        case GET_ANALISYS_REQUEST:
            return { ...state, analisys: action.payload, isFetching: true, error: "" }

        case GET_ANALISYS_FAIL:
            return { ...state, analisys: [], isFetching: false, error: action.payload }

        case GET_ANALISYS_SUCCESSFUL:
            return { ...state, analisys: action.payload, isFetching: false, error: "" }

        default: 
            return state;
    }
}