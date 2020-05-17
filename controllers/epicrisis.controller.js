const Epicrisis = require("../models/epicrisis.model").Epicrisis;
const User = require("../models/user.model").User;
const decode = require("jwt-decode");
const epicrisisRole = require("../roles/epicrisis.role");
const roles = require("user-groups-roles");
const getDate = require("../utils/getDate");
const fs = require("fs");

const decodeAuthorization = authorization => decode(authorization);

exports.uploadEpicrisis = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const LinkToFile = req.file.path.toString();
        const Passport = req.body.userData.toString();
        const Doctor = decodedToken.Passport.toString();
        const Date = getDate().toString();
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/upload", "POST");

        if(val) {
            await Epicrisis.create({ Date, Passport, LinkToFile, Doctor });
            return res.status(200).json({ message: "Загружено" })
        } else {
            return res.status(403).json({ error: "Запрещено" })
        }
        
    } catch(err) {
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" })
        console.error(err);
    }
} 

exports.getAllEpicrisis = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/get", "GET");

        User.belongsTo(Epicrisis, {
            targetKey: "Passport",
            foreignKey: "Passport"
        });

        Epicrisis.belongsTo(User, {
            targetKey: "Passport",
            foreignKey: "Doctor"
        });

        if(val) {
            const epicrisis = await User.findAll({
                attributes: ["Surname", "Name", "MiddleName"],
                include: [{
                    model: Epicrisis,
                    attributes: ["idEpicrisis","Date"],
                    include: [{
                        model: User,
                        attributes: ["Surname", "Name", "MiddleName"],
                        where: Epicrisis.Doctor == User.Passport
                    }]
                }]
            });

            return res.status(200).json(epicrisis);
        } else {
            return res.status(403).json({ error: "Запрещено" })
        }


    } catch(err) {
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" });
        console.error(err);
    } 
};
exports.getConcreteEpicrisis = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/concrete", "GET");

        User.belongsTo(Epicrisis, {
            targetKey: "Passport",
            foreignKey: "Passport"
        });

        Epicrisis.belongsTo(User, {
            targetKey: "Passport",
            foreignKey: "Doctor"
        });

        const { Passport } = decodedToken;

        if(val) {
            const epicrisisOfUser = await User.findAll({
                attributes: ["Surname", "Name", "MiddleName"],
                where: { Passport },
                include: [{
                    model: Epicrisis,
                    attributes: ["idEpicrisis","Date"],
                    include: {
                        model: User,
                        attributes: ["Surname", "Name", "MiddleName"],
                        where: Epicrisis.Doctor == User.Passport
                    }
                }]
            });
    
            return res.status(200).json(epicrisisOfUser);
        } else {
            return res.status(403).json({ error: "Запрещено" })
        }

        

    } catch(err) {
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" });
        console.error(err);
    }
};

exports.downloadEpicrisis = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/download", "POST");

        const { id } = req.body;
        
        if(val) {
            const epicrisis = await Epicrisis.findOne({
                where: { idEpicrisis: id }
            })
    
            return res.download(epicrisis.LinkToFile);
        } else {
            return res.status(403).json({ error: "Запрещено" })
        }

        
        
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" });
    }
};

exports.deleteEpicrisis = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/delete", "POST");

        const { id } = req.body;

        if(val) {
            const epicrisis = await Epicrisis.findOne({
                where: { idEpicrisis: id }
            })
    

            if(epicrisis) {
                fs.unlinkSync(epicrisis.LinkToFile);
                Epicrisis.destroy({
                    where: {
                        idEpicrisis: id
                    }
                })
            }

            return res.status(200).json({ message: "Удалено" });
        } else {
            return res.status(403).json({ error: "Запрещено" })
        }

    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" });
    } 
}