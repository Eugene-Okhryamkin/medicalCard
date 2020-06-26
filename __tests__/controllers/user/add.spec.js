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

const definedUser = {
    OMC: "000000000000",
    CodeOfExemption: "00000000000000ion",
    SNILS: "qCodeOfEssdfcxempt2ion",
    Surname: "b32432423",
    MiddleName: "Middvvfbfdme",
    Name: "Name",
    DateOfBirth: "DateOfBirth",
    LiveArea: "LiveArea",
    LiveRegion: "LiveRegion",
    LiveSettlement: "LiveSettlement",
    LiveNeighborhood: "LiveNeighborhood",
    LiveHouse: "LiveHouse",
    LiveHousing: "LiveHousing",
    LiveAppartment: "uvcoLiveAppartment",
    StayArea: "StayArea",
    StayRegion: "StayRegion",
    StaySettlement: "StaySettlement",
    StayNeighborhood: "StayNeighborhood",
    StayHouse: "StayHouse",
    StayHousing: "StayHousing",
    StayAppartment: "StaayAppartment",
    HomePhoneNumber: "hoer000000",
    PlaceOfWork: "PlaceOfvxWork",
    Proffession: "Proffession",
    Position: "Position",
    Dependant: "Dependant",
    Passport: "2007 15321",
    Password: "Password",
    Role: "Pacient",
    Gender: "male",
    RightToPreferentialService: "SFRightToPreflleService",
    Disability: "Dability"
};


const successUser = {
    idpacient: "5",
    OMC: "000000000000000",
    CodeOfExemption: "000000000000001",
    SNILS: "111111111 111 11",
    Surname: "surname",
    MiddleName: "Middvvfbfdme",
    Name: "Name",
    DateOfBirth: "DateOfBirth",
    LiveArea: "LiveArea",
    LiveRegion: "LiveRegion",
    LiveSettlement: "LiveSettlement",
    LiveNeighborhood: "LiveNeighborhood",
    LiveHouse: "LiveHouse",
    LiveHousing: "LiveHousing",
    LiveAppartment: "uvcoLiveAppartment",
    StayArea: "StayArea",
    StayRegion: "StayRegion",
    StaySettlement: "StaySettlement",
    StayNeighborhood: "StayNeighborhood",
    StayHouse: "StayHouse",
    StayHousing: "StayHousing",
    StayAppartment: "StaayAppartment",
    HomePhoneNumber: "213564645",
    PlaceOfWork: "PlaceOfvxWork",
    Proffession: "Proffession",
    Position: "Position",
    Dependant: "-",
    Passport: "010101112",
    Password: "Password",
    Role: "Pacient",
    Gender: "male",
    RightToPreferentialService: "54365345754374",
    Disability: "-"
};

const json = JSON.stringify(successUser);
const defJson = JSON.stringify(definedUser);

describe("add user tests", () => {

    beforeEach(done => {
        adminAuth(done);
        pacientAuth(done);
    });

    //Pass if user is not defined, else change user data

    test("add user successful", done => {
        return request(app)
            .post("/api/users/add")
            .set("Content-Type", "application/json")
            .set("Authorization", tokens.adminToken)
            .send(json)
            .then(res => {
                expect(res.status).toBe(201);
                expect(res.body).toHaveProperty("message");
                done();
            });
    });

    test("add user fail: user is defined", done => {
        return request(app)
            .post("/api/users/add")
            .set("Content-Type", "application/json")
            .set("Authorization", tokens.adminToken)
            .send(defJson)
            .then(res => {
                expect(res.status).toBe(406);
                expect(res.body).toHaveProperty("message");
                done();
            });
    });

    test("Add user failed: access denied", done => {
        return request(app)
            .post("/api/users/add")
            .set("Content-Type", "application/json")
            .set("Authorization", tokens.pacientToken)
            .send(json)
            .then(res => {
                expect(res.status).toBe(403);
                expect(res.body).toHaveProperty("error");
                done();
            });
    });

});
