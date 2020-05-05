export const UPLOAD_EPICRISIS_REQUEST = "UPLOAD_EPICRISIS_REQUEST";
export const UPLOAD_EPICRISIS_SUCCESSFUL = "UPLOAD_EPICRISIS_SUCCESSFUL";
export const UPLOAD_EPICRISIS_FAIL = "UPLOAD_EPICRISIS_FAIL";

export const uploadEpicrisis = file => dispatch => {
    dispatch({
        type: UPLOAD_EPICRISIS_REQUEST,
        payload: file
    })

    return fetch("/api/epicrisis/upload", {
        method: "POST",
        headers: {
            Authorization: localStorage.getItem("authData"),
        },
        body: file
    })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                dispatch({
                    type: UPLOAD_EPICRISIS_FAIL,
                    payload: data.error
                })
            } else {
                dispatch({
                    type: UPLOAD_EPICRISIS_SUCCESSFUL,
                    payload: data
                })
            }
        })
}