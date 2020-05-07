export const GET_DOCUMENTS_REQUEST = "GET_DOCUMENTS_REQUEST";
export const GET_DOCUMENTS_SUCCESSFUL = "GET_DOCUMENTS_SUCCESSFUL";
export const GET_DOCUMENTS_FAIL = "GET_DOCUMENTS_FAIL";

export const getDocuments = url => dispatch => {
    dispatch({
        type: GET_DOCUMENTS_REQUEST,
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
                    type: GET_DOCUMENTS_FAIL,
                    payload: data.error
                })
            } else {
                dispatch({
                    type: GET_DOCUMENTS_SUCCESSFUL,
                    payload: data
                })
            }
        })
}