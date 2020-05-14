export const GET_ANALISYS_REQUEST = "GET_ANALISYS_REQUEST";
export const GET_ANALISYS_FAIL = "GET_ANALISYS_FAIL";
export const GET_ANALISYS_SUCCESSFUL = "GET_ANALISYS_SUCCESSFUL";

export const getAnalisys = url => dispatch => {
    dispatch({
        type: GET_ANALISYS_REQUEST,
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
            if(data.error) {
                dispatch({
                    type: GET_ANALISYS_FAIL,
                    payload: data.error
                })
            } else {
                dispatch({
                    type: GET_ANALISYS_SUCCESSFUL,
                    payload: data
                })
            }
        })
}