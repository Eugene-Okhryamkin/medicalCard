import { combineReducers } from "redux";
import { toggleMenu } from "./toggleMenuReducer";
import { auth } from "./authReducer";
import { searchPacient } from "./searchPacient"
import { deleteUser } from "./deleteUserReducer";
import { getUsers } from "./getUsersReducer";
import { selectUser } from "./selectToManageUserReducer";
import { updateUser } from "./updateUserReducer";

export const rootReducer = combineReducers({
    toggleMenu: toggleMenu,
    auth: auth,
    search: searchPacient,
    deleteUser: deleteUser,
    getUsers: getUsers,
    selectUser: selectUser,
    updateUser: updateUser
});