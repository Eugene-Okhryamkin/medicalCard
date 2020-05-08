export const UPDATE_DIAGNOSIS_REQUEST = "UPDATE_DIAGNOSIS_REQUEST";
export const UPDATE_DIAGNOSIS_SUCCESSFUL = "UPDATE_DIAGNOSIS_SUCCESSFUL";
export const UPDATE_DIAGNOSIS_FAIL = "UPDATE_DIAGNOSIS_FAIL";

export const updateDiagnosis = data => dispatch => {
    dispatch({
        type: UPDATE_DIAGNOSIS_REQUEST,
        payload: data
    })

    return fetch("/api/diagnosis/update", {
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
                    type: UPDATE_DIAGNOSIS_FAIL,
                    payload: data.error
                })
            } else {
                dispatch({
                    type: UPDATE_DIAGNOSIS_SUCCESSFUL,
                    payload: data
                })
            }
        })
}