export const ADD_ANALISYS_REQUEST = "ADD_ANALISYS_REQUEST";
export const ADD_ANALISYS_FAIL = "ADD_ANALISYS_FAIL";
export const ADD_ANALISYS_SUCCESSFUL = "ADD_ANALISYS_SUCCESSFUL";

export const addAnalisys = (url, data) => dispatch => {
    dispatch({
        type: ADD_ANALISYS_REQUEST,
        payload: data
    })

    return fetch(url, {
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
                    type: ADD_ANALISYS_FAIL,
                    payload: data.error
                })
            } else {
                dispatch({
                    type: ADD_ANALISYS_SUCCESSFUL,
                    payload: data
                })
            }
        })
}