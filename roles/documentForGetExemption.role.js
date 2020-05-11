const roles = require("user-groups-roles");
const index = require("./index.role");

module.exports = (
    roles.createNewPrivileges(["/add", "POST"], "add document for get exemption", false),
    roles.createNewPrivileges(["/get", "GET"], "get document for get exemption", false),
    roles.createNewPrivileges(["/concrete", "GET"], "get concrete document for get exemption", false),
    roles.createNewPrivileges(["/delete", "POST"], "delete document for get exemption", false),
    roles.createNewPrivileges(["/update", "POST"], "update document for get exemption", false),

    roles.addPrivilegeToRole("Admin", ["/add", "POST"], "add document for get exemption", true),
    roles.addPrivilegeToRole("Admin", ["/get", "GET"], "get document for get exemption", true),
    roles.addPrivilegeToRole("Admin", ["/concrete", "GET"], "get concrete document for get exemption", true),
    roles.addPrivilegeToRole("Admin", ["/delete", "POST"], "delete document for get exemption", true),
    roles.addPrivilegeToRole("Admin", ["/update", "POST"], "update document for get exemption", true),

    roles.addPrivilegeToRole("Pacient", ["/add", "POST"], "add document for get exemption", false),
    roles.addPrivilegeToRole("Pacient", ["/get", "GET"], "get document for get exemption", false),
    roles.addPrivilegeToRole("Pacient", ["/concrete", "GET"], "get concrete document for get exemption", true),
    roles.addPrivilegeToRole("Pacient", ["/delete", "POST"], "delete document for get exemption", false),
    roles.addPrivilegeToRole("Pacient", ["/update", "POST"], "update document for get exemption", false),

    roles.addPrivilegeToRole("Doctor", ["/add", "POST"], "add document for get exemption", false),
    roles.addPrivilegeToRole("Doctor", ["/get", "GET"], "get document for get exemption", true),
    roles.addPrivilegeToRole("Doctor", ["/concrete", "GET"], "get concrete document for get exemption", true),
    roles.addPrivilegeToRole("Doctor", ["/delete", "POST"], "delete document for get exemption", false),
    roles.addPrivilegeToRole("Doctor", ["/update", "POST"], "update document for get exemption", false),

    roles.addPrivilegeToRole("technikalDoctor", ["/add", "POST"], "add document for get exemption", false),
    roles.addPrivilegeToRole("technikalDoctor", ["/get", "GET"], "get document for get exemption", false),
    roles.addPrivilegeToRole("technikalDoctor", ["/concrete", "GET"], "get concrete document for get exemption", true),
    roles.addPrivilegeToRole("technikalDoctor", ["/delete", "POST"], "delete document for get exemption", false),
    roles.addPrivilegeToRole("technikalDoctor", ["/update", "POST"], "update document for get exemption", false)   
)