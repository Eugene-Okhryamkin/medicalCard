export const ADD_DOCUMENT_REQUEST = "ADD_DOCUMENT_REQUEST";
export const ADD_DOCUMENT_SUCCESSFUL = "ADD_DOCUMENT_SUCCESSFUL";
export const ADD_DOCUMENT_FAIL = "ADD_DOCUMENT_FAIL";

export const addDocument = data => dispatch => {
    dispatch({
        type: ADD_DOCUMENT_REQUEST,
        payload: data
    })

    return fetch("/api/exemptions/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("authData")
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                dispatch({
                    type: ADD_DOCUMENT_FAIL,
                    payload: data.error
                })
            } else {
                dispatch({
                    type: ADD_DOCUMENT_SUCCESSFUL,
                    payload: data
                })
            }
        })
}