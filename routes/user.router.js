const express = require("express");
const userController = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.post("/add", userController.addUser);
userRouter.post("/login", userController.authUser);
userRouter.get("/get", userController.getUsers);
userRouter.post("/delete", userController.devDeleteUser);

module.exports = userRouter;

