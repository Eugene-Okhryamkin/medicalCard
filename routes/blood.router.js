const express = require("express");
const bloodController = require("../controllers/blood.controller");
const bloodRouter = express.Router();

bloodRouter.post("/add", bloodController.addBlood);
bloodRouter.get("/get", bloodController.getBlood);
bloodRouter.post("/update", bloodController.updateBlood);
bloodRouter.post("/delete", bloodController.deleteBlood);

module.exports = bloodRouter;