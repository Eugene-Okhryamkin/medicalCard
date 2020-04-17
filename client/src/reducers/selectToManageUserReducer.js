import { SELECT_USER } from "../actions/selectToManageUser";

const initState = {
    selectedUser: null 
}

export const selectUser = (state = initState, action) => {
    switch(action.type) {
        case SELECT_USER: 
            return { ...state, selectedUser: action.payload }

        default: 
            return state;    
    }
}