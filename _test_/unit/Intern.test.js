const Intern = require("./../../src/employees/Intern");

function makeIntern(
    id = 179,
    email = "Intern@email.com",
    name = "Zoe Little",
    school = "Robotics"
) {
    return new Intern(id, email, name, school);
}

describe("Testing Intern", () => {
    it("should contain the correct field", () => {
        const id = 179;
        const email = "Intern@email.com";
        const name = "Zoe Little";
        const school = "Robotics";

        const intern = makeIntern(id, email, name, school);

        // compare the results
        expect(intern.id).toEqual(id);
        expect(intern.email).toEqual(email);
        expect(intern.name).toEqual(name);
        expect(intern.school).toEqual(school);
    });
    //getRole()
    it("should return Intern when getRole() is called", () => {
        const Intern = makeIntern();
        const expected = "Intern";
        expect(Intern.getRole()).toEqual(expected);
    });
    //getEmail()
    it("should return email when getEmail() is called", () => {
        const expected = "Intern@email.com";
        const Intern = makeIntern(179, expected);
        expect(Intern.getEmail()).toEqual(expected);
    });
    //getName()
    it("should return Intern when getName() is called", () => {
        const expected = "Zoe Little";
        const Intern = makeIntern(179, "Intern@email.com", expected);
        expect(Intern.getName()).toEqual(expected);
    });
    //getId()
    it("should return Intern when getId() is called", () => {
        const expected = 179;
        const Intern = makeIntern(expected);
        expect(Intern.getId()).toEqual(expected);
    });
});