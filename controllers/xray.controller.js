const XRay = require("../models/XRay.model").XRay;
const User = require("../models/user.model").User;
const decode = require("jwt-decode");
const db = require("../config/database");
const roles = require("user-groups-roles");

const decodeAuthorization = authorization => decode(authorization);

exports.addXRay = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const { Code, Date, Passport } = req.body;
        const Doctor = decodedToken.Passport

        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/add", "POST");

        if(val) {
            const candidate = await XRay.findOne({
                where: { Code }
            });
    
            if(candidate) {
                return res.status(406).json({ error: "Такой снимок уже существует" })
            }
    
            await XRay.create({
                Code,
                Date,
                Passport,
                Doctor
            });
    
            return res.status(200).json({ message: "Рентген успешно добавлен" })
        } else {
            return res.status(403).json({ error: "Запрещено" })
        }
        

    } catch(err) {
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" })
    }
}

exports.getXRay = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/get", "GET");

        User.belongsTo(XRay, {
            targetKey: "Passport",
            foreignKey: "Passport",
        });

        XRay.belongsTo(User, {
            targetKey: "Passport",
            foreignKey: "Doctor",
        });


        if(val) {
            const xray = await User.findAll({
                attributes: ["Surname", "Name", "MiddleName", "Passport"],
                include: [{
                    model: XRay,
                    required: true,
                    include: [{
                        model: User,
                        attributes: ["Surname", "Name", "MiddleName"]
                    }]     
                }]
            })

           return res.status(200).json(xray)
        } else {
            return res.status(403).json({ error: "Запрещено" });
        }

    } catch(err) {
        console.error(err)
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" })
    }
}

exports.updateXRay = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/update", "POST")
        const { Code, Date, Passport } = req.body;
        if(val) {

            XRay.update({ Code, Date, Passport }, {
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

exports.deleteXRay = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/delete", "POST")
        const { id } = req.body;

        if(val) {
            XRay.destroy({
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