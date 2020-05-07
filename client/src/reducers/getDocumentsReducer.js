import { GET_DOCUMENTS_REQUEST, GET_DOCUMENTS_SUCCESSFUL, GET_DOCUMENTS_FAIL } from "../actions/getDocumentForGetExemptionAction";

const initState = {
    documents: [],
    isFetching: false,
    error: ""
}

export const getDocuments = (state = initState, action) => {
    switch(action.type) {
        case GET_DOCUMENTS_REQUEST:
            return { ...state, documents: action.payload, isFetching: true, error: "" }

        case GET_DOCUMENTS_FAIL: 
            return { ...state, documents: [], isFetching: false, error: action.payload }
            
        case GET_DOCUMENTS_SUCCESSFUL: 
            return { ...state, documents: action.payload, isFetching: false, error: "" }
            
        default:
            return state    
    }
}