import { combineReducers } from "redux";
import { handleLoginReducer } from "./handleLoginReducer";

export const rootReducer = combineReducers({
    getUser: handleLoginReducer
});