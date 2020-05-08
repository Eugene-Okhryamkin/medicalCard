const Diagnosis = require("../models/diagnosis.model").Diagnosis;
const User = require("../models/user.model").User;
const decode = require("jwt-decode");
const roles = require("user-groups-roles");

const decodeAuthorization = authorization => decode(authorization);

exports.addDiagnosis = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/add", "POST");
        const Doctor = decodedToken.Passport;
        const { Date, codeOfSic, Passport } = req.body;

        if(val) {
            const diagnosis = await Diagnosis.create({ Date, codeOfSic, Passport, Doctor });
            return res.status(200).json(diagnosis);
        } else {
            return res.status(403).json({ error: "Запрещено" });
        }
        
    } catch(err) {
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" })
        console.error(err);
    }
}

exports.getDiagnosis = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/get", "GET");

        User.belongsTo(Diagnosis, {
            targetKey: "Passport",
            foreignKey: "Passport"
        });

        Diagnosis.belongsTo(User, {
            targetKey: "Passport",
            foreignKey: "Doctor"
        });

        if(val) {
            const diagnosis = await User.findAll({
                attributes: ["Surname", "Name", "MiddleName", "Passport"],
                include: [{
                    model: Diagnosis,
                    attributes: ["idDiagnosis", "codeOfSic" ,"Date"],
                    include: [{
                        model: User,
                        attributes: ["Surname", "Name", "MiddleName"],
                        where: Diagnosis.Doctor == User.Passport
                    }]
                }]
            });
    
            return res.status(200).json(diagnosis);
        } else {
            return res.status(403).json({ error: "Запрещено" })
        }

        

    } catch(err) {
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" })
        console.error(err);
    }
}

exports.updateDiagnosis = async (req, res) => {
    console.log(req.body)
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/update", "POST");
        const { idDiagnosis } = req.body.Diagnosis;

        if(val) {
            await Diagnosis.update(req.body, {
                where: { idDiagnosis }
            })
    
            return res.status(200).json({ message: "Обновлено" });
        } else {
            return res.status(403).json({ error: "Запрещено" })
        }

    } catch(err) {
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" })
        console.error(err);
    }
}

exports.deleteDiagnosis = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/delete", "POST");
        const { idDiagnosis } = req.body;

        if(val) {
            await Diagnosis.destroy({
                where: { idDiagnosis }
            })
    
            return res.status(200).json({ message: "Удалено" });
        } else {
            return res.status(403).json({ error: "Запрещено" })
        }

        
    } catch(err) {
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" })
        console.error(err);
    }
}