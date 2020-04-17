export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESSFUL = "DELETE_USER_SUCCESSFUL";

export const deleteUser = userID => dispatch => {
    dispatch({
        type: DELETE_USER_REQUEST,
        payload: userID
    })
    return fetch("/api/users/delete", {
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
                type: DELETE_USER_SUCCESSFUL,
                payload: data.message
            })
        })

}