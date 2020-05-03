export const EPICRISIS_REQUEST = "EPICRISIS_REQUEST";
export const EPICRISIS_SUCCESSFUL = "EPICRISIS_SUCCESSFUL";
export const EPICRISIS_FAIL = "EPICRISIS_FAIL";

export const getEpicrisis = url => dispatch => {
    dispatch({
        type: EPICRISIS_REQUEST,
        payload: url
    })

    return fetch(url, {
        headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("authData")
        } 
    })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                dispatch({
                    type: EPICRISIS_FAIL,
                    payload: data.error
                })
            } else {
                dispatch({
                    type: EPICRISIS_SUCCESSFUL,
                    payload: data
                })
            }
        })
} 