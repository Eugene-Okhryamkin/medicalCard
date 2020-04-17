import { SEARCH_PACIENT } from "../actions/searchPacientsAction";

const initState = {
    search: "" 
}

export const searchPacient = (state = initState, action) => {
    switch(action.type) {
        case SEARCH_PACIENT: 
            return { ...state, search: action.payload }

        default: 
            return state;    
    }
}