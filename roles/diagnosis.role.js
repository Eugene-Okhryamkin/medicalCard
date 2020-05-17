
const roles = require("user-groups-roles");
const index = require("./index.role");

module.exports = (
        
    roles.createNewPrivileges(["/add", "POST"], "add diagnosis", false),
    roles.createNewPrivileges(["/get", "GET"], "get diagnosis", false),
    roles.createNewPrivileges(["/update", "POST"], "update diagnosis", false),
    roles.createNewPrivileges(["/delete", "POST"], "delete diagnosis", false),

    roles.addPrivilegeToRole("Admin", ["/add", "POST"], true),
    roles.addPrivilegeToRole("Admin", ["/get", "GET"], true),
    roles.addPrivilegeToRole("Admin", ["/update", "POST"], true),
    roles.addPrivilegeToRole("Admin", ["/delete", "POST"], true),

    roles.addPrivilegeToRole("Pacient", ["/add", "POST"], false),
    roles.addPrivilegeToRole("Pacient", ["/get", "GET"], false),
    roles.addPrivilegeToRole("Pacient", ["/update", "POST"], false),
    roles.addPrivilegeToRole("Pacient", ["/delete", "POST"], false),

    roles.addPrivilegeToRole("Doctor", ["/add", "POST"], true),
    roles.addPrivilegeToRole("Doctor", ["/get", "GET"], true),
    roles.addPrivilegeToRole("Doctor", ["/update", "POST"], false),
    roles.addPrivilegeToRole("Doctor", ["/delete", "POST"], false),

    roles.addPrivilegeToRole("TechnikalDoctor", ["/add", "POST"], false),
    roles.addPrivilegeToRole("TechnikalDoctor", ["/get", "GET"], true),
    roles.addPrivilegeToRole("TechnikalDoctor", ["/update", "POST"], false),
    roles.addPrivilegeToRole("TechnikalDoctor", ["/delete", "POST"], false),

    roles.addPrivilegeToRole("MiddleMed", ["/add", "POST"], false),
    roles.addPrivilegeToRole("MiddleMed", ["/get", "GET"], true),
    roles.addPrivilegeToRole("MiddleMed", ["/update", "POST"], false),
    roles.addPrivilegeToRole("MiddleMed", ["/delete", "POST"], false)
)