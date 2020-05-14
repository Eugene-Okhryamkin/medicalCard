const Fluorography = require("../models/Fluorography.model").Fluorography;
const User = require("../models/user.model").User;
const decode = require("jwt-decode");
const db = require("../config/database");
const roles = require("user-groups-roles");

const decodeAuthorization = authorization => decode(authorization);

exports.addFluorography = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const { Code, Date, Passport } = req.body;
        const Doctor = decodedToken.Passport;

        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/add", "POST");

        if(val) {
            const candidate = await Fluorography.findOne({
                where: { Code }
            });
    
            if(candidate) {
                return res.status(406).json({ error: "Такой снимок уже существует" })
            }
    
            await Fluorography.create({
                Code,
                Date,
                Passport,
                Doctor
            });
    
            return res.status(200).json({ message: "Флюорография успешно добавлена" })
        } else {
            return res.status(403).json({ error: "Запрещено" })
        }

    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" })
    }
}

exports.getFluorography = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/get", "GET");

        
        User.belongsTo(Fluorography, {
            targetKey: "Passport",
            foreignKey: "Passport",
        });

        Fluorography.belongsTo(User, {
            targetKey: "Passport",
            foreignKey: "Doctor",
        });


        if(val) {
            const fluorography = await User.findAll({
                attributes: ["Surname", "Name", "MiddleName", "Passport"],
                include: [{
                    model: Fluorography,
                    required: true,
                    include: [{
                        model: User,
                        attributes: ["Surname", "Name", "MiddleName"]
                    }]     
                }]
            })

           return res.status(200).json(fluorography)
        } else {
            return res.status(403).json({ error: "Запрещено" });
        }
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" }) 
    }
    
}

exports.updateFluorography = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/update", "POST")
        const { Code, Date, Passport } = req.body;
        if(val) {

            Fluorography.update({ Code, Date, Passport }, {
                where: { 
                    id: req.body.analisy.id 
                }
            })

            return res.status(200).json({ message: "Обновлено" })
        } else {
            return res.status(403).json({ error: "Запрещено" })
        }

    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" }) 
    }
}

exports.deleteFluorography = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/delete", "POST")
        const { id } = req.body;

        if(val) {
            Fluorography.destroy({
                where: { id }
            })
    
            return res.status(200).json({ message: "Удалено" })
        } else {
            return res.status(403).json({ error: "Запрещено" })
        }
        
    } catch(err) {
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" }) 
    }
}