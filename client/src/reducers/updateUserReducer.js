import { UPDATE_USER_REQUEST, UPDATE_USER_SUCCESSFUL } from "../actions/updateUserAction";

const initState = {
    user: null,
    isFetching: false
}

export const updateUser = (state = initState, action) => {
    switch(action.type) {
        case UPDATE_USER_REQUEST:
            return { ...state, user: action.payload, isFetching: true }

        case UPDATE_USER_SUCCESSFUL:
            return { ...state, user: action.payload, isFetching: false }
            
        default: 
            return state;    
    }
};