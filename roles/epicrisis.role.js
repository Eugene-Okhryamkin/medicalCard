const roles = require("user-groups-roles");
const index = require("./index.role");

module.exports = (
        
    roles.createNewPrivileges(["/upload", "POST"], "upload epicrisis", false),
    roles.createNewPrivileges(["/concrete", "GET"], "get concrete epicrisis", false),
    roles.createNewPrivileges(["/download", "POST"], "download epicrisis", false),
    roles.createNewPrivileges(["/get", "GET"], "get epicrisis", false),
    roles.createNewPrivileges(["/delete", "POST"], "delete epicrisis", false),

    roles.addPrivilegeToRole("Admin", ["/upload", "POST"], true),
    roles.addPrivilegeToRole("Admin", ["/concrete", "GET"], true),
    roles.addPrivilegeToRole("Admin", ["/download", "POST"], true),
    roles.addPrivilegeToRole("Admin", ["/get", "GET"], true),
    roles.addPrivilegeToRole("Admin", ["/delete", "POST"], true),

    roles.addPrivilegeToRole("Pacient", ["/upload", "POST"], false),
    roles.addPrivilegeToRole("Pacient", ["/concrete", "GET"], true),
    roles.addPrivilegeToRole("Pacient", ["/download", "POST"], true),
    roles.addPrivilegeToRole("Pacient", ["/get", "GET"], false),
    roles.addPrivilegeToRole("Admin", ["/delete", "POST"], false),

    roles.addPrivilegeToRole("Doctor", ["/upload", "POST"], true),
    roles.addPrivilegeToRole("Doctor", ["/concrete", "GET"], true),
    roles.addPrivilegeToRole("Doctor", ["/download", "POST"], true),
    roles.addPrivilegeToRole("Doctor", ["/get", "GET"], true),
    roles.addPrivilegeToRole("Admin", ["/delete", "POST"], false),

    roles.addPrivilegeToRole("TechnikalDoctor", ["/upload", "POST"], false),
    roles.addPrivilegeToRole("TechnikalDoctor", ["/concrete", "GET"], true),
    roles.addPrivilegeToRole("TechnikalDoctor", ["/download", "POST"], true),
    roles.addPrivilegeToRole("TechnikalDoctor", ["/get", "GET"], false),
    roles.addPrivilegeToRole("Admin", ["/delete", "POST"], false),

    roles.addPrivilegeToRole("MiddleMed", ["/upload", "POST"], false),
    roles.addPrivilegeToRole("MiddleMed", ["/concrete", "GET"], true),
    roles.addPrivilegeToRole("MiddleMed", ["/download", "POST"], true),
    roles.addPrivilegeToRole("MiddleMed", ["/get", "GET"], false),
    roles.addPrivilegeToRole("Admin", ["/delete", "POST"], false)
)

