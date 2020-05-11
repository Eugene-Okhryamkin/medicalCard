const roles = require("user-groups-roles");
const index = require("./index.role");

module.exports = (
        
    roles.createNewPrivileges(["/add", "POST"], "add analisys", false),
    roles.createNewPrivileges(["/concrete", "GET"], "get concrete analisys", false),
    roles.createNewPrivileges(["/delete", "POST"], "delete analisys", false),
    roles.createNewPrivileges(["/get", "GET"], "get analisys", false),

    roles.addPrivilegeToRole("Admin", ["/add", "POST"], true),
    roles.addPrivilegeToRole("Admin", ["/concrete", "GET"], true),
    roles.addPrivilegeToRole("Admin", ["/delete", "POST"], true),
    roles.addPrivilegeToRole("Admin", ["/get", "GET"], true),

    roles.addPrivilegeToRole("Pacient", ["/add", "POST"], false),
    roles.addPrivilegeToRole("Pacient", ["/concrete", "GET"], true),
    roles.addPrivilegeToRole("Pacient", ["/delete", "POST"], false),
    roles.addPrivilegeToRole("Pacient", ["/get", "GET"], false),

    roles.addPrivilegeToRole("Doctor", ["/add", "POST"], true),
    roles.addPrivilegeToRole("Doctor", ["/concrete", "GET"], true),
    roles.addPrivilegeToRole("Doctor", ["/delete", "POST"], false),
    roles.addPrivilegeToRole("Doctor", ["/get", "GET"], true),

    roles.addPrivilegeToRole("technikalDoctor", ["/add", "POST"], true),
    roles.addPrivilegeToRole("technikalDoctor", ["/concrete", "GET"], true),
    roles.addPrivilegeToRole("technikalDoctor", ["/delete", "POST"], false),
    roles.addPrivilegeToRole("technikalDoctor", ["/get", "GET"], true)
)

