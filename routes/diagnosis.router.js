const express = require("express");
const diagnosisController = require("../controllers/diagnosis.controller");
const diagnosisRouter = express.Router();

diagnosisRouter.post("/add", diagnosisController.addDiagnosis),
diagnosisRouter.get("/get", diagnosisController.getDiagnosis),
diagnosisRouter.post("/update", diagnosisController.updateDiagnosis),
diagnosisRouter.post("/delete", diagnosisController.deleteDiagnosis)

module.exports = diagnosisRouter;