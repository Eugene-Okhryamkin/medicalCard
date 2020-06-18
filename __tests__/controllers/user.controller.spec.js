
const request = require("supertest");
const userRouter = require("../../routes/user.router.js");

describe("user controller tests", () => {
    test("add user test", done => {
        request(userRouter)
            .post("/add")
            .expect("Такой пациент уже существует")
            .expect("Пациент успешно зарегистрирован")
            .expect("Запрещено")
            .expect("Content-Type", "application/json; charset=utf-8")
            .end(done);
    });

    test("get users test", done => {
        request(userRouter)
            .get("/get")
            .expect(200)
            .expect("Запрещено")
            .end(done);
    });

    test("delete users test", done => {
        request(userRouter)
            .post("/delete")
            .expect("Удалено")
            .expect("Запрещено")
            .end(done);
    });

    test("auth user test", done => {
        request(userRouter)
            .post("/login")
            .expect("Такого пользователя не существует")
            .expect("Неверный пароль")
            .expect(200)
            .end(done);
    });

    test("update user test", done => {
        request(userRouter)
            .post("/update")
            .expect("Обновлено")
            .expect("Нет Доступа")
            .end(done);
    });
});