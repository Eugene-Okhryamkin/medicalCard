export const ADD_DIAGNOSIS_REQUEST = "ADD_DIAGNOSIS_REQUEST";
export const ADD_DIAGNOSIS_SUCCESSFUL = "ADD_DIAGNOSIS_SUCCESSFUL";
export const ADD_DIAGNOSIS_FAIL = "ADD_DIAGNOSIS_FAIL";

export const addDiagnosis = data => dispatch => {
    dispatch({
        type: ADD_DIAGNOSIS_REQUEST,
        payload: data
    })

    return fetch("/api/diagnosis/add", {
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
                    type: ADD_DIAGNOSIS_FAIL,
                    payload: data.error
                })
            } else {
                dispatch({
                    type: ADD_DIAGNOSIS_SUCCESSFUL,
                    payload: data
                })
            }
        })
}