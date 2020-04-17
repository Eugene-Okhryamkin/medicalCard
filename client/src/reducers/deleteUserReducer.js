import { DELETE_USER_REQUEST, DELETE_USER_SUCCESSFUL } from "../actions/deleteUser";

const initState = {
    deleteUserID: null,
    isFetching: false,
    error: ""
}

export const deleteUser = (state = initState, action) => {
    switch(action.type) {
        case DELETE_USER_REQUEST:
            return { ...state, deleteUserID: action.payload, isFetching: true, error: "" }
        

        case DELETE_USER_SUCCESSFUL:
            return { ...state, deleteUserID: action.payload, isFetching: false, error: "" }

        default: 
            return state    
            
    }
}