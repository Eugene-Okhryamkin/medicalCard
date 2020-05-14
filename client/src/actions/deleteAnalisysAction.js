export const DELETE_ANALISYS_REQUEST = "DELETE_ANALISYS_REQUEST";
export const DELETE_ANALISYS_FAIL = "DELETE_ANALISYS_FAIL";
export const DELETE_ANALISYS_SUCCESSFUL = "DELETE_ANALISYS_SUCCESSFUL";

export const deleteAnalisys = (url, id) => dispatch => {
    dispatch({
        type: DELETE_ANALISYS_REQUEST,
        payload: id
    })

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("authData")
        },
        body: JSON.stringify(id)
    })
        .then(res => res.json)
        .then(data => {
            if(data.error) {
                dispatch({
                    type: DELETE_ANALISYS_FAIL,
                    payload: data.error
                })
            } else {
                dispatch({
                    type: DELETE_ANALISYS_SUCCESSFUL,
                    payload: data
                })
            }
        })
}