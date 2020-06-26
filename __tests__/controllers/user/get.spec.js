const request = require("supertest");
const app = require("../../../app");

let tokens = {
    adminToken: "",
    pacientToken: ""
};

function adminAuth(done) {
    const data = { SNILS: "116-973-385 89", Password: "asdf" };
    const json = JSON.stringify(data);

    return request(app)
        .post("/api/users/login")
        .set("Content-Type", "application/json")
        .send(json)
        .then(res => {
            tokens.adminToken = res.body.token;
            done();
        })
};

function pacientAuth(done) {
    const data = { SNILS: "1CodeOfExemption", Password: "Password" };
    const json = JSON.stringify(data);

    return request(app)
        .post("/api/users/login")
        .set("Content-Type", "application/json")
        .send(json)
        .then(res => {
            tokens.pacientToken = res.body.token;
            done();
        })
};

describe("get users test", () => {

    beforeEach(done => {
        adminAuth(done);
        pacientAuth(done);
    });

    test("get users success", done => {
        return request(app)
            .get("/api/users/get")
            .set("Content-Type", "application/json")
            .set("Authorization", tokens.adminToken)
            .then(res => {
                expect(res.status).toBe(200);
                done();
            });
    });

    test("get users failed: access denied", done => {
        return request(app)
            .get("/api/users/get")
            .set("Content-Type", "application/json")
            .set("Authorization", tokens.pacientToken)
            .then(res => {
                expect(res.status).toBe(403)
                done();
            });
    });
});