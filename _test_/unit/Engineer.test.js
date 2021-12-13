const Engineer = require("./../../src/employees/Engineer");

function makeEngineer(
    id = 88,
    email = "Engineer@email.com",
    name = "bob brown",
    github='repo@github.com'
) {
    return new Engineer(id, email, name, github);
}

describe("Testing Engineer", () => {
    it("should contain the correct field", () => {
        const id = 88;
        const email = "Engineer@email.com";
        const name = "bob brown";
        const github = "repo@github.com";

        const engineer = makeEngineer(id, email, name, github);

        // Compare the results
        expect(engineer.email).toEqual(email);
        expect(engineer.name).toEqual(name);
        expect(engineer.id).toEqual(id);
    });

    //getRole()
    it("should return Engineer when getRole() is called", () => {
        const Engineer = makeEngineer();
        const expected = 'Engineer';
        expect(Engineer.getRole()).toEqual(expected);
    });
    //getEmail()
    it("should return email when getEmail() is called", () => {
        const expected = 'Engineer@email.com';
        const Engineer = makeEngineer(88, expected);
        expect(Engineer.getEmail()).toEqual(expected);
    });
    //getName()
    it("should return Engineer when getName() is called", () => {
        const expected = 'bob brown';
        const Engineer = makeEngineer(88, "Engineer@email.com", expected);
        expect(Engineer.getName()).toEqual(expected);
    });
    //getId()
    it("should return Engineer when getId() is called", () => {
        const expected = 88;
        const Engineer = makeEngineer(expected);
        expect(Engineer.getId()).toEqual(expected);
    });
});