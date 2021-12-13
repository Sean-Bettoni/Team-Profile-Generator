const Manager = require("./../../src/employees/Manager");

function makeManager(
    id = 555,
    email = "Manager@email.com",
    name = "James White",
    officeNumber = "229"
) {
    return new Manager(id, email, name, officeNumber);
}

describe("Testing Manager", () => {
    it("should contain the correct field", () => {
        const id = 555;
        const email = "Manager@email.com";
        const name = "James White";
        const officeNumber = "229";

        const manager = makeManager(id, email, name, officeNumber);

        // compare the results
        expect(manager.id).toEqual(id);
        expect(manager.email).toEqual(email);
        expect(manager.name).toEqual(name);
        expect(manager.officeNumber).toEqual(officeNumber);
    });
    //getRole()
    it("should return Manager when getRole() is called", () => {
        const Manager = makeManager();
        const expected = "Manager";
        expect(Manager.getRole()).toEqual(expected);
    });
    //getEmail()
    it("should return email when getEmail() is called", () => {
        const expected = "Manager@email.com";
        const Manager = makeManager(555, expected);
        expect(Manager.getEmail()).toEqual(expected);
    });
    //getName()
    it("should return Manager when getName() is called", () => {
        const expected = "James White";
        const Manager = makeManager(555, "Manager@email.com", expected);
        expect(Manager.getName()).toEqual(expected);
    });
    //getId()
    it("should return Manager when getId() is called", () => {
        const expected = 555;
        const Manager = makeManager(expected);
        expect(Manager.getId()).toEqual(expected);
    });
});