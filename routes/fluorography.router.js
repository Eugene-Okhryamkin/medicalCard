const express = require("express");
const fluorographyController = require("../controllers/fluorography.controller");
const fluorographyRouter = express.Router();

fluorographyRouter.post("/add", fluorographyController.addFluorography);
fluorographyRouter.get("/get", fluorographyController.getFluorography);
fluorographyRouter.post("/update", fluorographyController.updateFluorography);
fluorographyRouter.post("/delete", fluorographyController.deleteFluorography);

module.exports = fluorographyRouter;