const BaseEmployee = require('./../../src/employees/BaseEmployees');

function makeEmployee(
    id = 111,
    email = 'employee@email.com',
    name = 'John Doe',
) {
    return new BaseEmployee(id, email, name);
}

describe("Testing Base Employee", () => {
    it("should contain the correct field", () => {
        const id = 111;
        const email = 'employee@email.com';
        const name = 'John Doe';

        const employee = makeEmployee(id, email, name);

        // Compare the results
        expect(employee.email).toEqual(email);
        expect(employee.name).toEqual(name);
        expect(employee.id).toEqual(id);
    });

    //getRole()
    it("should return Employee when getRole() is called", () => {
        const employee = makeEmployee();
        const expected = 'Employee';
        expect(employee.getRole()).toEqual(expected);
    });
    //getEmail()
    it("should return email when getEmail() is called", () => {
        const expected = 'employee@email.com';
        const employee = makeEmployee(111, expected);
        expect(employee.getEmail()).toEqual(expected);
    });
    //getName()
    it("should return Employee when getName() is called", () => {
        const expected = 'John Doe';
        const employee = makeEmployee(111, 'employee@email.com', expected);
        expect(employee.getName()).toEqual(expected);
    });
    //getId()
    it("should return Employee when getId() is called", () => {
        const expected = '111';
        const employee = makeEmployee(expected);
        expect(employee.getId()).toEqual(expected);
    });
});