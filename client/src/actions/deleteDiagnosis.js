export const DELETE_DIAGNOSIS_REQUEST = "DELETE_DIAGNOSIS_REQUEST";
export const DELETE_DIAGNOSIS_SUCCESSFUL = "DELETE_DIAGNOSIS_SUCCESSFUL";
export const DELETE_DIAGNOSIS_FAIL = "DELETE_DIAGNOSIS_FAIL";

export const deleteDiagnosis = id => dispatch => {
    dispatch({
        type: DELETE_DIAGNOSIS_REQUEST,
        payload: id
    })

    return fetch("/api/diagnosis/delete", {
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
                    type: DELETE_DIAGNOSIS_FAIL,
                    payload: data.error
                })
            } else {
                dispatch({
                    type: DELETE_DIAGNOSIS_SUCCESSFUL,
                    payload: data
                })
            }
        })
}