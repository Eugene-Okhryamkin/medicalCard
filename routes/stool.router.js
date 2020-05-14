const express = require("express");
const stoolController = require("../controllers/stool.controller");
const stoolRouter = express.Router();

stoolRouter.post("/add", stoolController.addStool);
stoolRouter.get("/get", stoolController.getStool);
stoolRouter.post("/update", stoolController.updateStool);
stoolRouter.post("/delete", stoolController.deleteStool);

module.exports = stoolRouter;