const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js").User;
const db = require("../config/database");
const { createAccessToken, verifyToken } = require("../config/tokens");

exports.addUser = async (req, res) => {
    try {    
        const { Passport } = req.body;
        let { Password } = req.body;
        
        const candidate = await User.findOne({
            where: { Passport }
        });

        if(candidate) {
            return res.status(406).json( { message: "Такой пациент уже существует" } );
        } 

        const hashedPassword = await bcrypt.hash(Password, 12);
        
        req.body.Password = hashedPassword;

        await User.create(req.body);

        return res.sendStatus(201).json({ message: "Пациент успешно зарегистрирован" });
        
    } catch(err) {
        console.error(err);
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
};

exports.getUsers = async (req, res) => {
    try {
        await User.findAll()
            .then(users => res.send(users).json())
            .catch(err => res.sendStatus(500).json())

    } catch(err) {
        console.error("ERROR: ", err);
        res.sendStatus(404).json({ message: "Не найдено" })
    }    
};

exports.devDeleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                Name: ""
            }
        });
        res.send("Удалено");
    } catch (err) {
        console.error("ERROR :", err);
    }
}

exports.authUser = (req, res) => {
    console.log(req.body);
    createAccessToken(User, res);
};



