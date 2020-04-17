const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/config.json");
const User = require("../models/user.model.js").User;
const db = require("../config/database");
const rules = require("../config/rules");

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
        res.send(404).json({ message: "Не найдено" })
    }    
};

exports.devDeleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                idpacient: req.body.id
            }
        });
        res.json({ message: "Удалено" })
    } catch (err) {
        console.error("ERROR :", err);
        res.send(500).json({ message: "Что-то пошло не так, попробуйте снова" })
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

        const userRules = rules(user); 

        const payload = {
            id: user.idpacient,
            name: user.Name,
            middlename: user.MiddleName,
            surname: user.Surname,
            role: user.Role,
            rules: userRules
        }
        

        const token = jwt.sign(payload, config.jwtSecret, { expiresIn: "1h" });
        
        res.json({ token });

    } catch(err) {
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
    

};


exports.updateUserData = async (req, res) => {
    console.log(req.body);
    try {
        await User.update(req.body, {
            where: {
                idpacient: req.body.id
            }
        })

        res.status(200).json({ message: "Обновлено" })
        
    } catch(err) {
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
}


