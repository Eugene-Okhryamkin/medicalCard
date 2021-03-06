const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/database");
const path = require("path");

//check

//Подключение базы данных
db
    .authenticate()
    .then(() => console.log("Соединение установлено"))
    .catch(err => console.error("Невозможно установить соединение с базой данных", err))

const app = express();

//Роуты(Маршруты)
const homeRouter = require("./routes/home.router");
const userRouter = require("./routes/user.router");
const epicrisisRouter = require("./routes/epicrisis.router");
const exemptionsRouter = require("./routes/documentForGetExemption.router");
const diagnsosisRouter = require("./routes/diagnosis.router");
const xrayRouter = require("./routes/XRay.router");
const fluorographyRouter = require("./routes/fluorography.router");
const bloodRouter = require("./routes/blood.router");
const urineRouter = require("./routes/urine.router");
const stoolRouter = require("./routes/stool.router");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/users", userRouter);
app.use("/api/epicrisis", epicrisisRouter);
app.use("/api/exemptions", exemptionsRouter);
app.use("/api/diagnosis", diagnsosisRouter);
app.use("/api/xray", xrayRouter);
app.use("/api/fluorography", fluorographyRouter);
app.use("/api/blood", bloodRouter);
app.use("/api/urine", urineRouter);
app.use("/api/stool", stoolRouter);

if(process.env.NODE_ENV === "production") {
    app.use("/", express.static(path.resolve(__dirname, "client", "build")))
    app.use("*", homeRouter);
};


module.exports = app;