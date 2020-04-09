import { TOGGLE_MENU } from "../actions/toggleMenuAction";

let initState = {
    isHidden: true
}

export const toggleMenu = (state = initState, action) => {

    switch(action.type) {
        case TOGGLE_MENU:
            return { ...state, isHidden: action.payload }

        default:
            return state;    
    }

};

