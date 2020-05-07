export const DELETE_DOCUMENT_REQUEST = "DELETE_DOCUMENT_REQUEST";
export const DELETE_DOCUMENT_SUCCESSFUL = "DELETE_DOCUMENT_SUCCESSFUL";

export const deleteDocument = userID => dispatch => {
    dispatch({
        type: DELETE_DOCUMENT_REQUEST,
        payload: userID
    })
    return fetch("/api/exemptions/delete", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json; odata=verbose",
            Authorization: localStorage.getItem("authData")
        },
        body: JSON.stringify(userID)
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: DELETE_DOCUMENT_SUCCESSFUL,
                payload: data.message
            })
        })

}