import { ADD_DOCUMENT_REQUEST, ADD_DOCUMENT_SUCCESSFUL, ADD_DOCUMENT_FAIL } from "../actions/addDocumentForGetExemptionAction";

const initState = {
    document: null,
    isFetching: false,
    error: ""
}

export const addDocument = (state = initState, action) => {
    switch(action.type) {
        case ADD_DOCUMENT_REQUEST:
            return { ...state, document: action.payload, isFetching: true, error: "" }

        case ADD_DOCUMENT_FAIL: 
            return { ...state, document: null, isFetching: false, error: action.payload } 
        
        case ADD_DOCUMENT_SUCCESSFUL:
            return { ...state, document: action.payload, isFetching: false, error: "" }

        default: 
            return state
    }
}