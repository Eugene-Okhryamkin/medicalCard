const roles = require("user-groups-roles");

module.exports = (
    roles.createNewRole("Admin"),
    roles.createNewRole("Pacient"),
    roles.createNewRole("Doctor"),
    roles.createNewRole("TechnikalDoctor"),
    roles.createNewRole("MiddleMed")
)

