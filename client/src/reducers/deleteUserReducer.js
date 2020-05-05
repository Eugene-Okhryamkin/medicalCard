import { DELETE_USER_REQUEST, DELETE_USER_SUCCESSFUL } from "../actions/deleteUser";

const initState = {
    deleteUserID: null,
    isFetching: false,
}

export const deleteUser = (state = initState, action) => {
    switch(action.type) {
        case DELETE_USER_REQUEST:
            return { ...state, deleteUserID: action.payload, isFetching: true }
        

        case DELETE_USER_SUCCESSFUL:
            return { ...state, deleteUserID: action.payload, isFetching: false }

        default: 
            return state    
            
    }
}