const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/database");

const PORT = process.env.PORT || 3000;

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


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/users", userRouter);
app.use("/api/epicrisis", epicrisisRouter);
app.use("/api/exemptions", exemptionsRouter);
app.use("/", homeRouter);

app.listen(PORT, () => console.log(`Server running at ${PORT}`));