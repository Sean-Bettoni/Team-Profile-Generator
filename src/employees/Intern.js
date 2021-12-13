const BaseEmployee = require("./BaseEmployees");


class Intern extends BaseEmployee {
    constructor(id, email, name, school){
        // super calls on the base const from above
        super(id, email, name);
        this.school = school;
    }
}

Intern.prototype.getSchool = function (){
    return this.school;
};

Intern.prototype.getRole = function (){
    return 'Intern';
};

module.exports = Intern;