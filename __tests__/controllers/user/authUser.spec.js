const request = require("supertest");
const userRouter = require("../../../routes/user.router");

describe("add user tests", () => {
    test("auth user success", done => {
        const inputData = [{ SNILS: "116-973-385 89", Password: "asdf" }];
        const json = JSON.stringify(inputData);

        request(userRouter)
            .post("/auth")
            .send(json)
            .set("Content-Type", "/json/")
            .expect(200)
            .end(done)
    });

    test("auth user fail", done => {
        const inputData = [{ SNILS: "0", Password: "x" }];
        const json = JSON.stringify(inputData);

        request(userRouter)
            .post("/auth")
            .send(json)
            .set("Content-Type", "/json/")
            .expect(404)
            .end(done)
    });

    test("auth password fail", done => {
        const inputData = [{ SNILS: "116-973-385 89", Password: "x" }];
        const json = JSON.stringify(inputData);

        request(userRouter)
            .post("/auth")
            .send(json)
            .set("Content-Type", "/json/")
            .expect(403)
            .end(done)
    });
})