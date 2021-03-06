const express = require("express");
const xrayController = require("../controllers/xray.controller");
const xrayRouter = express.Router();

xrayRouter.post("/add", xrayController.addXRay);
xrayRouter.get("/get", xrayController.getXRay);
xrayRouter.post("/update", xrayController.updateXRay);
xrayRouter.post("/delete", xrayController.deleteXRay);

module.exports = xrayRouter;