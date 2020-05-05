import { GET_USERS_REQUEST, GET_USERS_FAIL, GET_USERS_SUCCESSFUL } from "../actions/getUsersActions";
import { DELETE_USER_REQUEST } from "../actions/deleteUser";


const initState = {
    users: [],
    isFetching: false,
    error: "" 
}

export const getUsers = (state = initState, action) => {
    switch(action.type) {
        case GET_USERS_REQUEST: 
            return { ...state, users: action.payload, isFetching: true, error: "" }
        
        case GET_USERS_FAIL:
            return { ...state, users: [], isFetching: false, error: action.payload }
         
        case GET_USERS_SUCCESSFUL: 
            return { ...state, users: action.payload, isFetching: false,  error: "" } 
            
        case DELETE_USER_REQUEST:
            return { ...state, users: state.users.filter(el => el.idpacient !== action.payload.id), isFetching: false }     

        default: 
            return state    
    }
}