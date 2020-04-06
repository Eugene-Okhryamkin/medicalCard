const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/config.json");
const User = require("../models/user.model.js").User;
const db = require("../config/database");

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
        return res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
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

exports.authUser = async (req, res) => {
    try {
        
        const { SNILS, Password } = req.body;

        const user = await User.findOne({
            where: { SNILS }
        });
    
        if(!user) {
            return res.status(404).json({ message: "Такого пользователя не существует" });
        }

        const pass = await bcrypt.compare(Password, user.Password);

        if(!pass) {
            return res.status(403).json({ message: "Неверный пароль" });
        }

        const token = jwt.sign({ userID: user.idpacient }, config.jwtSecret, { expiresIn: "1h" });
        
        res.json({token,  userID: user.idpacient });

    } catch(err) {
        res.sendStatus(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
    

};



