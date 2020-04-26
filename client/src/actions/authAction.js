import jwtDecode from "jwt-decode";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const login = userData => dispatch => {
    dispatch({
        type: LOGIN_REQUEST,
        payload: userData
    })

    return fetch("/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                localStorage.removeItem("authData");
                localStorage.clear();
                dispatch({
                    type: LOGIN_FAIL,
                    payload: data.error
                })
            } else {
                localStorage.setItem("authData", data.token)
                const user = jwtDecode(data.token);
                dispatch({
                    type: LOGIN_SUCCESSFUL,
                    payload: user
                })
            }
        })
      
}


