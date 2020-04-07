export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const handleLogin = user => dispatch => {
    dispatch({
        type: LOGIN_REQUEST,
        payload: user
    })

    return fetch("/api/users/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },

        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .then(data => {
            if(data.message) {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: data.message
                })
            } else {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: data
                })

                localStorage.setItem("authData", data.token)
            }
        })
}
