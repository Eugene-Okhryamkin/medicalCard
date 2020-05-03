const Epicrisis = require("../models/epicrisis.model").Epicrisis;
const User = require("../models/user.model").User;
const decode = require("jwt-decode");

const decodeAuthorization = authorization => decode(authorization);

const getDate = () => {
    let now = new Date();
    let day = now.getDate().toString();
    let month = (now.getMonth() + 1).toString();
    let year = now.getFullYear().toString();
    
    if(day.length < 2) {
        day = "0" + day;
    }

    if(month.length < 2) {
        month = "0" + month;
    }

    let fullDate = `${day}.${month}.${year}`;

    return fullDate;
}

exports.uploadEpicrisis = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);
        const LinkToFile = req.file.path.toString();
        const Passport = req.body.userData.toString();
        const Doctor = decodedToken.Passport.toString();
        const Date = getDate().toString();

        await Epicrisis.create({ Date, Passport, LinkToFile, Doctor });
        res.status(200).json({ message: "Загружено" })
    } catch(err) {
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" })
        console.error(err);
    }
} 

exports.getAllEpicrisis = async (req, res) => {
    try {
        const decodedToken = await decodeAuthorization(req.headers.authorization);

        User.belongsTo(Epicrisis, {
            targetKey: "Passport",
            foreignKey: "Passport"
        });

        Epicrisis.belongsTo(User, {
            targetKey: "Passport",
            foreignKey: "Doctor"
        });

        const epicrisisOfUser = await User.findAll({
            attributes: ["Surname", "Name", "MiddleName"],
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


        res.status(200).json(epicrisisOfUser);

    } catch(err) {
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" });
        console.error(err);
    } 
};
exports.getConcreteEpicrisis = async (req, res) => {
    const decodedToken = await decodeAuthorization(req.headers.authorization);

    try {
        User.belongsTo(Epicrisis, {
            targetKey: "Passport",
            foreignKey: "Passport"
        })

        const epicrisis = await User.findOne({
            where: decodedToken.Passport == Epicrisis.Passport,
            include: [Epicrisis]
        })

        res.status(200).json(epicrisis);

    } catch(err) {
        res.status(500).json({ error: "Что-то пошло не так, попробуйте снова" });
        console.error(err);
    }
};

exports.downloadEpicrisis = (req, res) => {};