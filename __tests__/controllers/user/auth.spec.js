const request = require("supertest");
const userRouter = require("../../../routes/user.router");
const app = require("../../../index");

describe("auth user test", () => {
    test("auth successful", done => {
        const data = { SNILS: "116-973-385 89", Password: "asdf" };
        const json = JSON.stringify(data);

        return request(app)
            .post("/api/users/login")
            .set("Content-Type", "application/json")
            .send(json)
            .then(res => {
                expect(res.status).toBe(200);
                expect(res.body).toHaveProperty("token")
                done();
            });
    });

    test("auth user fail: invalid SNILS", done => {
        const data = { SNILS: "116-973-385 00", Password: "asdf" };
        const json = JSON.stringify(data);

        return request(app)
            .post("/api/users/login")
            .set("Content-Type", "application/json")
            .send(json)
            .then(res => {
                expect(res.status).toBe(404);
                expect(res.body).toHaveProperty("error")
                done();
            });
    });

    test("auth user fail: invalid Password", done => {
        const data = { SNILS: "116-973-385 89", Password: "123" };
        const json = JSON.stringify(data);

        return request(app)
            .post("/api/users/login")
            .set("Content-Type", "application/json")
            .send(json)
            .then(res => {
                expect(res.status).toBe(403);
                expect(res.body).toHaveProperty("error")
                done();
            });
    });

});




