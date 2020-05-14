import { combineReducers } from "redux";
import { toggleMenu } from "./toggleMenuReducer";
import { auth } from "./authReducer";
import { searchPacient } from "./searchPacient"
import { deleteUser } from "./deleteUserReducer";
import { getUsers } from "./getUsersReducer";
import { selectUser } from "./selectToManageUserReducer";
import { updateUser } from "./updateUserReducer";
import { addUser } from "./addUserReducer";
import { getEpicrisis } from "./getEpicrisisReducer";
import { uploadEpicrisis } from "./uploadEpicrisisReducer";
import { getDocuments } from "./getDocumentsReducer";
import { addDocument } from "./addDocumentReducer";
import { deleteDocument } from "./deleteDocumentReducer";
import { getDiagnosis } from "./getDiagnosisReducer";
import { addDiagnosis } from "./addDiagnosisReducer";
import { updateDiagnosis } from "./updateDiagnosisReducer";
import { deleteDiagnosis } from "./deleteDiagnosisReducer";
import { getAnalisys } from "./getAnalisysReducer";
import { addAnalisys } from "./addAnalisysReducer";
import { updateAnalisys } from "./updateAnalisysReducer";
import { deleteAnalisys } from "./deleteAnalisysReducer";

export const rootReducer = combineReducers({
    toggleMenu: toggleMenu,
    auth: auth,
    search: searchPacient,
    deleteUser: deleteUser,
    getUsers: getUsers,
    selectUser: selectUser,
    updateUser: updateUser,
    addUser: addUser,
    getEpicrisis: getEpicrisis,
    uploadEpicrisis: uploadEpicrisis,
    getDocuments: getDocuments,
    addDocument: addDocument,
    deleteDocument: deleteDocument,
    getDiagnosis: getDiagnosis,
    addDiagnosis: addDiagnosis,
    updateDiagnosis: updateDiagnosis,
    deleteDiagnosis: deleteDiagnosis,
    getAnalisys: getAnalisys,
    addAnalisys: addAnalisys,
    updateAnalisys: updateAnalisys,
    deleteAnalisys: deleteAnalisys
});