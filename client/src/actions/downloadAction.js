export const DOWNLOAD_REQUEST = "DOWNLOAD_REQUEST";
export const DOWNLOAD_SUCCESSFUL = "DOWNLOAD_SUCCESSFUL";
export const DOWNLOAD_FAIL = "DOWNLOAD_FAIL";

export const downloadAction = id => dispatch => {
    dispatch({
        type: DOWNLOAD_REQUEST,
        payload: id
    })

    return fetch("/api/epicrisis/download", {
        method: "POST",
        headers: {
            Authorization: localStorage.getItem("authData"),
            "Content-Type": "application/json"
        },
        redirect: 'follow',
        body: JSON.stringify(id)
    })
        .then(res => res.blob())
        .then(blob => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = 'Эпикриз.docx';
            a.click();
        })
}