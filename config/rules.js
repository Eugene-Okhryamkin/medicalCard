const Ability = require("@casl/ability").Ability;
const AbilityBuilder = require("@casl/ability").AbilityBuilder;

const defineAbilityForUser = user => {
    const { can, rules, cannot } = new AbilityBuilder();

    switch(user.Role) {
        case "Admin":
            return can(["create, delete, update, read"], ["User"])
            
        case "doctor": 
            return (
                can(["read", "update", "read"], ["User"]),
                cannot(["delete"], "User")
            )
            
        case "middleMedicalPersonal":
            console.log("Добавление данных о анализах");
            break;

            
        case "technicalDoctor": 
            console.log("Добавление данных о снимках");
            break;
            
        case "pacient":
                return cannot(["create, delete, update, read"], ["user"]);
                console.log("Чтение необходимой информации"),
                console.log("Запрет: редактирование, доступ к служебной информации")
                break;
            
    }

    return new Ability(rules);
}



module.exports = defineAbilityForUser