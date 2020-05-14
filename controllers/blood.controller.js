const Blood = require("../models/blood.model").Blood;
const User = require("../models/user.model").User;
const decode = require("jwt-decode");
const db = require("../config/database");
const roles = require("user-groups-roles");

const decodeAuthorization = authorization => decode(authorization);

exports.addBlood = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const { Code, Date, Passport, Group, Rhesus } = req.body;
        const Doctor = decodedToken.Passport;

        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/add", "POST");

        if(val) {
            const candidate = await Blood.findOne({
                where: { Code }
            });
    
            if(candidate) {
                return res.status(406).json({ error: "Такая информация уже существует" })
            }
    
            await Blood.create({
                Code,
                Date,
                Passport,
                Doctor,
                Group,
                Rhesus
            });
    
            return res.status(200).json({ message: "Информация о крови добавлена" })
        } else {
            return res.status(403).json({ error: "Запрещено" })
        }

    } catch(err) {
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" })
    }
}

exports.getBlood = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/get", "GET");

        User.belongsTo(Blood, {
            targetKey: "Passport",
            foreignKey: "Passport",
        });

        Blood.belongsTo(User, {
            targetKey: "Passport",
            foreignKey: "Doctor",
        });


        if(val) {
            const blood = await User.findAll({
                attributes: ["Surname", "Name", "MiddleName", "Passport"],
                include: [{
                    model: Blood,
                    required: true,
                    include: [{
                        model: User,
                        attributes: ["Surname", "Name", "MiddleName"]
                    }]     
                }]
            })

            return res.status(200).json(blood);
        } else {
            return res.status(403).json({ error: "Запрещено" });
        }
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" }) 
    }
    
}

exports.updateBlood = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/update", "POST")
        const { Code, Date, Passport } = req.body;
        if(val) {

            Blood.update({ Code, Date, Passport }, {
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

exports.deleteBlood = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/delete", "POST")
        const { id } = req.body;

        if(val) {
            Blood.destroy({
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