export const DELETE_EPICRISIS_REQUEST = "DELETE_EPICRISIS_REQUEST";
export const DELETE_EPICRISIS_FAIL = "DELETE_EPICRISIS_FAIL";
export const DELETE_EPICRISIS_SUCCESSFUL = "DELETE_EPICRISIS_SUCCESSFUL";

export const deleteEpicrisis = id => dispatch => {
    dispatch({
        type: DELETE_EPICRISIS_REQUEST,
        payload: id
    })

    return fetch("/api/epicrisis/delete", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("authData")
        },
        body: JSON.stringify(id)
    })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                dispatch({
                    type: DELETE_EPICRISIS_FAIL,
                    payload: data.error
                })
            } else {
                dispatch({
                    type: DELETE_EPICRISIS_SUCCESSFUL,
                    payload: data
                })
            }
        })
}