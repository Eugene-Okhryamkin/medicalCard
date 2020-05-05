const multer = require("multer");

exports.storageConfigForEpicrisis = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/epicrisis")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + Date.now())
    }
});