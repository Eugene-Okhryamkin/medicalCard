export const GET_DIAGNOSIS_REQUEST = "GET_DIAGNOSIS_REQUEST";
export const GET_DIAGNOSIS_SUCCESSFUL = "GET_DIAGNOSIS_SUCCESSFUL";
export const GET_DIAGNOSIS_FAIL = "GET_DIAGNOSIS_FAIL";

export const getDiagnosis = () => dispatch => {
    dispatch({
        type: GET_DIAGNOSIS_REQUEST,
        payload: []
    })

    return fetch("/api/diagnosis/get", {
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
                    type: GET_DIAGNOSIS_FAIL,
                    payload: data.error
                })
            } else {
                dispatch({
                    type: GET_DIAGNOSIS_SUCCESSFUL,
                    payload: data
                })
            }
        })
}