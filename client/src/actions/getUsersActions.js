export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_FAIL = "GET_USERS_FAIL";
export const GET_USERS_SUCCESSFUL = "GET_USERS_SUCCESSFUL";

export const getUsers = url => dispatch => {
    dispatch({
        type: GET_USERS_REQUEST,
        payload: []
    })

    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("authData")
        }
    })
        .then(res => res.json())
        .then(data => {
            if(data.message) {
                dispatch({
                    type: GET_USERS_FAIL,
                    payload: data.message
                })
            } else {
                dispatch({
                    type: GET_USERS_SUCCESSFUL,
                    payload: data
                })
            }
        })
} 