const BaseEmployee = require("./BaseEmployees");


class Manager extends BaseEmployee {
    constructor(id, email, name, officeNumber){
        // super calls on the base const from above
        super(id, email, name);
        this.officeNumber = officeNumber;
    }
}

Manager.prototype.getOfficeNumber = function (){
    return this.officeNumber;
};

Manager.prototype.getRole = function (){
    return 'Manager';
};

module.exports = Manager;