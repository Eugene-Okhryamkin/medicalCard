const DocumentForGetExemption = require("../models/documentForGetExemption.model").DocumentForGetExemption;
const User = require("../models/user.model").User;
const decode = require("jwt-decode");
const roles = require("user-groups-roles");
const documentForGetExemptionRoles = require("../roles/documentForGetExemption.role");
const getDate = require("../utils/getDate");

const decodeAuthorization = authorization => decode(authorization);

exports.addDocumentForGetExemption = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const { Num, Date, PayedBy, Passport } = req.body;
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/add", "POST");

        if(val) {
            const candidate = await DocumentForGetExemption.findOne({
                where: { Num }
            });
    
            if(candidate) {
                return res.status(406).json({ error: "Данный документ существует" })
            }
    
            DocumentForGetExemption.create({ Num, Date, PayedBy, Passport});
            return res.status(200).json({ message: "Документ добавлен" })
        } else {
            return res.status(403).json({ error: "Запрещено" })
        }

        

    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" })
    }
};

exports.getAllDocumentsForGetExemption = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/get", "GET");

        User.belongsTo(DocumentForGetExemption, {
            targetKey: "Passport",
            foreignKey: "Passport"
        });

        DocumentForGetExemption.belongsTo(User, {
            targetKey: "Passport",
            foreignKey: "Passport"
        });


        if(val) {
            const documents = await DocumentForGetExemption.findAll({
                include: [{
                    model: User,
                    attributes: ["Surname", "Name", "MiddleName"]
                }]
            })
            
            return res.status(200).json(documents)

        } else {
            return res.status(403).json({ error: "Запрещено" })
        }

        
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" })
    }
}

exports.getConcreteDocumentForGetExemption = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/concrete", "GET");
        const { Passport } = decodedToken;
        
        User.belongsTo(DocumentForGetExemption, {
            targetKey: "Passport",
            foreignKey: "Passport"
        });

        DocumentForGetExemption.belongsTo(User, {
            targetKey: "Passport",
            foreignKey: "Passport"
        });

        if(val) {
            const documents = await DocumentForGetExemption.findAll({
                where: { Passport },
                include: [{
                    model: User,
                    attributes: ["Surname", "Name", "MiddleName"]
                }]
            })
            
            return res.status(200).json(documents)
        } else {
            return res.status(403).json({ error: "Запрещено" })
        }
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" });
    }
}

exports.deleteDocumentForGetExemption = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/delete", "POST");
        const { idDocumentForGetExemption } = req.body;

        if(val) {
            await DocumentForGetExemption.destroy({ 
               where: { idDocumentForGetExemption }
            })
            return res.status(200).json({ message: "Удалено" })
        } else {
            return res.status(403).json({ message: "Запрещено" })
        }

        
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" });
    }
}

exports.updateDocumentForGetExemption = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const val = roles.getRoleRoutePrivilegeValue(decodedToken.role, "/update", "POST");
        const { idDocumentForGetExemption } = req.body;

        if(val) {
            DocumentForGetExemption.update(req.body, {
                where: { idDocumentForGetExemption }
            });
    
            return res.status(200).json({ message: "Обновлено" })
        } else {
            return res.status(403).json({ error: "Запрещено" })
        }
        

    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" });
    }
}