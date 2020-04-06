const sendData = async (url, method = "GET", body = null, headers = { "Content-Type": "application/json" }) => {
    try {
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
    } catch (err) {
        console.log(err);
    }
    
};

export default sendData;