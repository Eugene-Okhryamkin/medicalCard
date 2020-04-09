import { combineReducers } from "redux";
import { toggleMenu } from "./toggleMenuReducer";
import { auth } from "./authReducer";

export const rootReducer = combineReducers({
    toggleMenu: toggleMenu,
    auth
});