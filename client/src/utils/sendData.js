const sendData = async (url, method = "GET", body = null, headers = { "Content-Type": "application/json" }) => {
    await fetch(url, { method, body: JSON.stringify(body), headers })
        .then(response => {
            if(response.ok) {
                return response.json();
            }

            return response.json().then(err => {
                const error = new Error("Что-то пошло не так");

                error.data = err;

                throw error;
            })
        })
};

export default sendData;