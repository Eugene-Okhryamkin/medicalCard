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

const id = 5;

const json = JSON.stringify({ id });

describe("delete user tests", () => {
    beforeEach(done => {
        adminAuth(done);
        pacientAuth(done);
    });

    test("delete user success", done => {
        return request(app)
            .post("/api/users/delete")
            .set("Content-Type", "application/json")
            .set("Authorization", tokens.adminToken)
            .send(json)
            .then(res => {
                expect(res.status).toBe(200);
                expect(res.hasOwnProperty("message"));
                done();
            });
    });

    test("delete user failed: access denied", done => {
        return request(app)
            .post("/api/users/delete")
            .set("Content-Type", "application/json")
            .set("Authorization", tokens.pacientToken)
            .send(json)
            .then(res => {
                expect(res.status).toBe(403);
                expect(res.hasOwnProperty("error"));
                done();
            });
    });
});