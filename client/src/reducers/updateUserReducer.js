import { UPDATE_USER_REQUEST, UPDATE_USER_FAIL, UPDATE_USER_SUCCESSFUL } from "../actions/updateUserAction";

const initState = {
    user: null,
    isFetching: false,
    message: "",
    error: ""
}

export const updateUser = (state = initState, action) => {
    switch(action.type) {
        case UPDATE_USER_REQUEST:
            return { ...state, user: action.payload, isFetching: true }

        case UPDATE_USER_SUCCESSFUL:
            return { ...state, user: action.payload, message: action.payload.message, isFetching: false }
            
        case UPDATE_USER_FAIL:
            return { ...state, user: action.payload, error: action.payload.error, isFetching: false  }
            
        default: 
            return state;    
    }
};