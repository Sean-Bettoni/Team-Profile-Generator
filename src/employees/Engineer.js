const BaseEmployee = require('./BaseEmployees');


class Engineer extends BaseEmployee {
    constructor(id, email, name, github){
        // super calls on the base const from above
        super(id, email, name);
        this.github = github;
    }
}

Engineer.prototype.getGithub = function(){
    return this.github;
};

Engineer.prototype.getRole = function () {
    return 'Engineer';
};

module.exports = Engineer;