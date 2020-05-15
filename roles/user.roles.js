const roles = require("user-groups-roles");
const index = require("./index.role")

module.exports = (
    roles.createNewPrivileges(["/update", "POST"], "update user", false),
    roles.createNewPrivileges(["/add", "POST"], "add user", false),
    roles.createNewPrivileges(["/login", "POST"], "login user", false),
    roles.createNewPrivileges(["/get", "GET"], "get users", false),
    roles.createNewPrivileges(["/delete", "POST"], "delete user", false),

    roles.addPrivilegeToRole("Admin", ["/update", "POST"], true),
    roles.addPrivilegeToRole("Admin", ["/add", "POST"], true),
    roles.addPrivilegeToRole("Admin", ["/login", "POST"], true),
    roles.addPrivilegeToRole("Admin", ["/get", "GET"], true),
    roles.addPrivilegeToRole("Admin", ["/delete", "POST"], true),

    roles.addPrivilegeToRole("Pacient", ["/update", "POST"], false),
    roles.addPrivilegeToRole("Pacient", ["/add", "POST"], false),
    roles.addPrivilegeToRole("Pacient", ["/login", "POST"], true),
    roles.addPrivilegeToRole("Pacient", ["/get", "GET"], false),
    roles.addPrivilegeToRole("Pacient", ["/delete", "POST"], false),

    roles.addPrivilegeToRole("Doctor", ["/update", "POST"], false),
    roles.addPrivilegeToRole("Doctor", ["/add", "POST"], false),
    roles.addPrivilegeToRole("Doctor", ["/login", "POST"], true),
    roles.addPrivilegeToRole("Doctor", ["/get", "GET"], true),
    roles.addPrivilegeToRole("Doctor", ["/delete", "POST"], false),

    roles.addPrivilegeToRole("TechnikalDoctor", ["/update", "POST"], false),
    roles.addPrivilegeToRole("TechnikalDoctor", ["/add", "POST"], false),
    roles.addPrivilegeToRole("TechnikalDoctor", ["/login", "POST"], true),
    roles.addPrivilegeToRole("TechnikalDoctor", ["/get", "GET"], true),
    roles.addPrivilegeToRole("TechnikalDoctor", ["/delete", "POST"], false)
)

