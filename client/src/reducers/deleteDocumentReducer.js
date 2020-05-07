import { DELETE_DOCUMENT_REQUEST, DELETE_DOCUMENT_SUCCESSFUL } from "../actions/deleteDocumentForGetExemptionAction";

const initState = {
    document: null,
    isFetching: false,
}

export const deleteDocument = (state = initState, action) => {
    switch(action.type) {
        case DELETE_DOCUMENT_REQUEST:
            return { ...state, document: action.payload, isFetching: true }
        
        case DELETE_DOCUMENT_SUCCESSFUL:
            return { ...state, document: action.payload, isFetching: false }

        default: 
            return state
    }
}