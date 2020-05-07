const express = require("express");
const userController = require("../controllers/documentForGetExemption.controller");
const documentForGetExemptionRouter = express.Router();

documentForGetExemptionRouter.post("/add", userController.addDocumentForGetExemption);
documentForGetExemptionRouter.get("/get", userController.getAllDocumentsForGetExemption);
documentForGetExemptionRouter.get("/concrete", userController.getConcreteDocumentForGetExemption);
documentForGetExemptionRouter.post("/delete", userController.deleteDocumentForGetExemption);
documentForGetExemptionRouter.post("/update", userController.updateDocumentForGetExemption);

module.exports = documentForGetExemptionRouter;