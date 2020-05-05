import { ADD_USER_REQUEST, ADD_USER_SUCCESSFUL } from "../actions/addUserAction";

const initState = {
    user: null,
    isFetching: false,
}

export const addUser = (state = initState, action) => {
    switch(action.type) {
        case ADD_USER_REQUEST:
            return { ...state, user: action.payload, isFetching: true }

        case ADD_USER_SUCCESSFUL:
            return { ...state, user: action.payload, isFetching: false }
            
        default: 
            return state    
    }
}