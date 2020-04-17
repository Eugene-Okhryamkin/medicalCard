export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESSFUL = "UPDATE_USER_SUCCESSFUL";

export const updateUser = userObj => dispatch => {
    dispatch({
        type: UPDATE_USER_REQUEST,
        payload: userObj
    })

    return fetch("/api/users/update", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("authData")
        },
        body: JSON.stringify(userObj)
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: UPDATE_USER_SUCCESSFUL,
                payload: data
            })
        })
}