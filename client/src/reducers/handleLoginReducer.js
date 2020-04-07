import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actions/handleLoginAction";

let initState = {
    isFetching: false,
    token: "",
    error: "",
    user: {}
};

export const handleLoginReducer = (state = initState, action) => {
    switch(action.type) {

        case LOGIN_REQUEST:
            return { ...state, isFetching: true, error: "" }

        case LOGIN_FAIL: 
            return { ...state, error: action.payload, isFetching: false }

        case LOGIN_SUCCESS:
            return { ...state, token: action.payload.token, user: action.payload.user, isFetching: false }    

        default: 
            return state;
    }
}
