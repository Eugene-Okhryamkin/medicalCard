const jwt = require("jsonwebtoken");

const secret = "sdfaln35Okfssfasdfas0sdf324890xczvjiufdfpsfofaiafFDSOIWELJSaufsafudjjasdf9weujcv";

const createAccessToken = (user, res) => {
    jwt.sign({ user }, secret, (err, token) => {
        res.json({ token });
    });
};

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];

    if(typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];

        req.token = bearerToken;

        next();
    } else {
        res.sendStatus(403);
    }
};

module.exports = {
    createAccessToken,
    verifyToken
};