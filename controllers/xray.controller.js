const XRay = require("../models/XRay.model").XRay;
const User = require("../models/user.model").User;
const decode = require("jwt-decode");
const db = require("../config/database");
const roles = require("user-groups-roles");

const decodeAuthorization = authorization => decode(authorization);

exports.addXRay = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const { code } = req.body;

        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/add", "POST");

        if(val) {
            const candidate = await XRay.findOne({
                where: {
                    CodeOfXRay: code
                }
            });
    
            if(candidate) {
                return res.status(406).json({ error: "Такой снимок уже существует" })
            }
    
            await XRay.create(req.body);
    
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

        if(val) {
            XRay.findAll()
            .then(xray => xray.status(200).json(xray))
            .catch(err => err.status(500).json())
        } else {
            return res.status(403).json({ error: "Запрещено" });
        }

    } catch(err) {
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" })
    }
}

exports.getConcreteXRay = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const { Passport } = decodedToken;

        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/concrete", "GET");

        User.belongsTo(XRay, {
            targetKey: "Passport",
            foreignKey: "Passport"
        });

        Epicrisis.belongsTo(XRay, {
            targetKey: "Passport",
            foreignKey: "Doctor"
        });

        if(val) {
            const xrayOfUser = await User.findAll({
                attributes: ["Name", "MiddleName", "Surname"],
                where: { Passport },
                include: [{
                    model: XRay,
                    attributes: ["CodeOfXRay", "Date", "Doctor"],
                    include: [{
                        model: User,
                        attributes: ["Name", "MiddleName", "Surname"],
                        where: XRay.Doctor == User.Passport
                    }]
                }]
            });
    
            return res.status(200).json(xrayOfUser);
        } else {
            return res.status(403).json({ error: "Запрещено" })
        }
        

    } catch(err) {
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" })
    }
}

exports.deleteXRay = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/concrete", "GET")
        const { id } = req.body;

        if(val) {
            XRay.destroy({
                where: {
                    idXRay: id
                }
            })
    
            return res.status(200).json({ message: "Удалено" })
        } else {
            return res.status(403).json({ error: "Запрещено" })
        }
        
    } catch(err) {
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" }) 
    }
}