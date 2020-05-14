export const UPDATE_ANALISYS_REQUEST = "UPDATE_ANALISYS_REQUEST";
export const UPDATE_ANALISYS_FAIL = "UPDATE_ANALISYS_FAIL";
export const UPDATE_ANALISYS_SUCCESSFUL = "UPDATE_ANALISYS_SUCCESSFUL";

export const updateAnalisys = (url, data) => dispatch => {
    dispatch({
        type: UPDATE_ANALISYS_REQUEST,
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
                    type: UPDATE_ANALISYS_FAIL,
                    payload: data.error
                })
            } else {
                dispatch({
                    type: UPDATE_ANALISYS_SUCCESSFUL,
                    payload: data
                })
            }
        })
}