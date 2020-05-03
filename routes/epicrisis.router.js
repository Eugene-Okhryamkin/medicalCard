const express = require("express");
const epicrisisController = require("../controllers/epicrisis.controller");
const multer = require("multer");
const { storageConfigForEpicrisis } = require("../config/multerConfig.js");
const epicrisisRouter = express.Router();


epicrisisRouter.post("/upload", multer({storage: storageConfigForEpicrisis}).single("epicrisis") ,epicrisisController.uploadEpicrisis)
epicrisisRouter.get("/get", epicrisisController.getAllEpicrisis)

module.exports = epicrisisRouter;