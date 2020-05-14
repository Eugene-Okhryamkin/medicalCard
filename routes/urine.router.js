const express = require("express");
const urineController = require("../controllers/urine.controller");
const urineRouter = express.Router();

urineRouter.post("/add", urineController.addUrine);
urineRouter.get("/get", urineController.getUrine);
urineRouter.post("/update", urineController.updateUrine);
urineRouter.post("/delete", urineController.deleteUrine);

module.exports = urineRouter;