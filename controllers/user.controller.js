const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const decode = require("jwt-decode");
const config = require("../config/config.json");
const User = require("../models/user.model").User;
const db = require("../config/database");
const roles = require("user-groups-roles");
const userRole = require("../roles/user.roles.js");

const decodeAuthorization = authorization => decode(authorization);

exports.addUser = async (req, res) => {
    try {    
        const decodedToken = await decodeAuthorization(req.headers.authorization)
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/add", "POST");

        if(val) {
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
    
            return res.status(201).json({ message: "Пациент успешно зарегистрирован" });
        } else {
            return res.json({ error: "Запрещено" })
        }

    } catch(err) {
        console.error(err);
        return res.status(500).json({ messageError: "Что-то пошло не так, попробуйте снова" });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const decodedToken = decodeAuthorization(req.headers.authorization)
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/get", "GET");

        console.log(decodedToken.role)

        if(val) {
            User.findAll()
            .then(users => res.status(200).json(users))
            .catch(err => res.sendStatus(500).json(err))

        } else {
            res.status(403).json({ error: "Запрещено" })
        }
        

    } catch(err) {
        console.error("ERROR: ", err);
        res.send(404).json({ error: "Не найдено" })
    }    
};

exports.devDeleteUser = async (req, res) => {
    try {
        const decodedToken = decodeAuthorization(req.headers.authorization)
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/delete", "POST");

        if(val) {
            await User.destroy({
                where: {
                    idpacient: req.body.id
                }
            });

            res.status(200).json({ message: "Удалено" })
        } else {
            res.status(403).json({ error: "Запрещено" })
        }
        
    } catch (err) {
        console.error("ERROR :", err);
        res.send(500).json({ error: "Что-то пошло не так, попробуйте снова" })
    }
}


exports.authUser = async (req, res) => {
    try {
        
        const { SNILS, Password } = req.body;

        const user = await User.findOne({
            where: { SNILS }
        });
    
        if(!user) {
            return res.status(404).json({ error: "Такого пользователя не существует" });
        }

        const pass = await bcrypt.compare(Password, user.Password);

        if(!pass) {
            return res.status(403).json({ error: "Неверный пароль" });
        }

        const payload = {
            id: user.idpacient,
            name: user.Name,
            middlename: user.MiddleName,
            surname: user.Surname,
            OMC: user.OMC,
            CodeOfExemption: user.CodeOfExemption,
            SNILS: user.SNILS,
            DateOfBirth: user.DateOfBirth,
            LiveArea: user.LiveArea,
            LiveRegion: user.LiveRegion,
            LiveSettlement: user.LiveSettlement,
            LiveNeighborhood: user.LiveNeighborhood,
            LiveHouse: user.LiveHouse,
            LiveHousing: user.LiveHousing,
            LiveAppartment: user.LiveAppartment,
            StayArea: user.StayArea,
            StayRegion: user.StayRegion,
            StaySettlement: user.StaySettlement,
            StayNeighborhood: user.StayNeighborhood,
            StayHouse: user.StayHouse,
            StayHousing: user.StayHousing,
            StayAppartment: user.StayAppartment,
            HomePhoneNumber: user.HomePhoneNumber,
            PlaceOfWork: user.PlaceOfWork,
            Proffession: user.Proffession,
            Position: user.Position,
            Dependant: user.Dependant,
            Passport: user.Passport,
            Gender: user.Gender,
            RightToPreferentialService: user.RightToPreferentialService,
            Disability: user.Disability,
            role: user.Role
        }
        

        const token = jwt.sign(payload, config.jwtSecret, { expiresIn: "1h" });
        
        res.status(200).json({ token });

    } catch(err) {
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" });
    }
    

};


exports.updateUserData = async (req, res) => {
    console.log(req.body);
    try {
        const decodedToken = decodeAuthorization(req.headers.authorization)
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/update", "POST");

        if(val) {
            await User.update(req.body, {
                where: {
                    idpacient: req.body.id
                }
            })
            
            res.status(200).json({ message: "Обновлено" })
        } else {
            res.status(403).json({ error: "Нет Доступа" })
        }

    } catch(err) {
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" });
    }
}


