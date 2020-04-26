export const ADD_USER_REQUEST = "ADD_USER_REQUEST";
export const ADD_USER_FAIL = "ADD_USER_FAIL";
export const ADD_USER_SUCCESSFUL = "ADD_USER_SUCCESSFUL";

export const addUser = userObj => dispatch => {
    dispatch({
        type: ADD_USER_REQUEST,
        payload: userObj
    })

    return fetch("/api/users/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("authData")
        },
        body: JSON.stringify(userObj)
    })
        .then(res => res.json())
        .then(data => {

            if(data.messageError) {
                dispatch({
                    type: ADD_USER_FAIL,
                    payload: data.messageError
                })
            } else {
                dispatch({
                    type: ADD_USER_SUCCESSFUL,
                    payload: data
                })
            }
        })
}