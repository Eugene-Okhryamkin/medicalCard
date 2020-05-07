const getDate = () => {
    let now = new Date();
    let day = now.getDate().toString();
    let month = (now.getMonth() + 1).toString();
    let year = now.getFullYear().toString();
    
    if(day.length < 2) {
        day = "0" + day;
    }

    if(month.length < 2) {
        month = "0" + month;
    }

    let fullDate = `${day}.${month}.${year}`;

    return fullDate;
}

module.exports = getDate;