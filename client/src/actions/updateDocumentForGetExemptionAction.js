export const UPDATE_DOCUMENT_REQUEST = "UPDATE_DOCUMENT_REQUEST";
export const UPDATE_DOCUMENT_SUCCESSFUL = "UPDATE_DOCUMENT_SUCCESSFUL";
export const UPDATE_DOCUMENT_FAIL = "UPDATE_DOCUMENT_FAIL";

export const updateDocument = userObj => dispatch => {
    dispatch({
        type: UPDATE_DOCUMENT_REQUEST,
        payload: userObj
    })

    return fetch("/api/exemptions/update", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("authData")
        },
        body: JSON.stringify(userObj)
    })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                dispatch({
                    type: UPDATE_DOCUMENT_FAIL,
                    payload: data.error
                })
            }

            dispatch({
                type: UPDATE_DOCUMENT_SUCCESSFUL,
                payload: data
            })
        })
}