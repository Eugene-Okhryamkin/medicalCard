const Stool = require("../models/stool.model").Stool;
const User = require("../models/user.model").User;
const decode = require("jwt-decode");
const db = require("../config/database");
const roles = require("user-groups-roles");

const decodeAuthorization = authorization => decode(authorization);

exports.addStool = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const { Code, Date, Passport } = req.body;
        const Doctor = decodedToken.Passport;

        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/add", "POST");

        if(val) {
            const candidate = await Stool.findOne({
                where: { Code }
            });
    
            if(candidate) {
                return res.status(406).json({ error: "Такая информация уже существует" })
            }
    
            await Stool.create({
                Code,
                Date,
                Passport,
                Doctor
            });
    
            return res.status(200).json({ message: "Информация добавлена" })
        } else {
            return res.status(403).json({ error: "Запрещено" })
        }

    } catch(err) {
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" })
    }
}

exports.getStool = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/get", "GET");

        
        User.belongsTo(Stool, {
            targetKey: "Passport",
            foreignKey: "Passport",
        });

        Stool.belongsTo(User, {
            targetKey: "Passport",
            foreignKey: "Doctor",
        });


        if(val) {
            const stool = await User.findAll({
                attributes: ["Surname", "Name", "MiddleName", "Passport"],
                include: [{
                    model: Stool,
                    required: true,
                    include: [{
                        model: User,
                        attributes: ["Surname", "Name", "MiddleName"]
                    }]     
                }]
            })

           return res.status(200).json(stool)
        } else {
            return res.status(403).json({ error: "Запрещено" });
        }
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" }) 
    }
    
}

exports.updateStool = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/update", "POST")
        const { Code, Date, Passport } = req.body;
       
        if(val) {

            Stool.update({ Code, Date, Passport }, {
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

exports.deleteStool = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/delete", "POST")
        const { id } = req.body;

        if(val) {
            Stool.destroy({
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