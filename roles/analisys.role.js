const roles = require("user-groups-roles");
const index = require("./index.role");

module.exports = (
        
    roles.createNewPrivileges(["/add", "POST"], "add analisys", false),
    roles.createNewPrivileges(["/update", "POST"], "update analisys", false),
    roles.createNewPrivileges(["/delete", "POST"], "delete analisys", false),
    roles.createNewPrivileges(["/get", "GET"], "get analisys", false),

    roles.addPrivilegeToRole("Admin", ["/add", "POST"], true),
    roles.addPrivilegeToRole("Admin", ["/update", "POST"], true),
    roles.addPrivilegeToRole("Admin", ["/delete", "POST"], true),
    roles.addPrivilegeToRole("Admin", ["/get", "GET"], true),

    roles.addPrivilegeToRole("Pacient", ["/add", "POST"], false),
    roles.addPrivilegeToRole("Pacient", ["/update", "POST"], true),
    roles.addPrivilegeToRole("Pacient", ["/delete", "POST"], false),
    roles.addPrivilegeToRole("Pacient", ["/get", "GET"], false),

    roles.addPrivilegeToRole("Doctor", ["/add", "POST"], true),
    roles.addPrivilegeToRole("Doctor", ["/update", "POST"], true),
    roles.addPrivilegeToRole("Doctor", ["/delete", "POST"], false),
    roles.addPrivilegeToRole("Doctor", ["/get", "GET"], true),

    roles.addPrivilegeToRole("TechnikalDoctor", ["/add", "POST"], true),
    roles.addPrivilegeToRole("TechnikalDoctor", ["/update", "POST"], true),
    roles.addPrivilegeToRole("TechnikalDoctor", ["/delete", "POST"], false),
    roles.addPrivilegeToRole("TechnikalDoctor", ["/get", "GET"], true),

    roles.addPrivilegeToRole("MiddleMed", ["/add", "POST"], false),
    roles.addPrivilegeToRole("MiddleMed", ["/update", "POST"], false),
    roles.addPrivilegeToRole("MiddleMed", ["/delete", "POST"], false),
    roles.addPrivilegeToRole("MiddleMed", ["/get", "GET"], true)
)

