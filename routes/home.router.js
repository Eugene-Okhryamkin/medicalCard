const express = require("express");
const homeController = require("../controllers/home.controller");
const homeRouter = express.Router();

homeRouter.get("/api", homeController.index);

module.exports = homeRouter;