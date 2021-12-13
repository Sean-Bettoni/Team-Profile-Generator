const inquirer = require("inquirer");
const Engineer = require("./src/employees/Engineer");
const Manager = require("./src/employees/Manager");
const Intern = require("./src/employees/Intern");
const fs = require("fs");
const markdown = require("./src/markdown")


const employees = [];

// Start the app
function main() {
    return askForEmployee('manager')
    .then(( answers ) => {
        employees.push(new Manager(...Object.values(answers)));
        askForInternOrEngineer()
    })
    .catch((err) => {
        console.log(err);
    });
}


main()

// Function holding the questions inquirer will ask
function askForEmployee(type='Manager'){

    const baseQuestions = [
        {
            type: 'input',
            name: 'id',
            message: `Please provide the ${type}'s Employee ID`,
            validate: (answer) => {
                if (isNaN(answer)) {
                    return 'Please provide a number';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `Please provide the ${type}'s email address`,
            validate: (answer) => {
                if (!answer.includes("@")) {
                    return 'Please enter a valid email address';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'name',
            message: `Please provide the ${type}'s name`,
        },
    ];
    // .toLowerCase converts user input to lower case so that if they responded with upper case the response is still valid
    // If user input is manager we are pushing officeNumber into the array of inquirer prompts
    switch(type.toLowerCase()){
        case 'manager':
            baseQuestions.push({
               type: 'input',
               name: 'officeNumber',
               message: 'Please provide the Managers office number',
               validate: (answer) => {
                   if (isNaN(answer)) {
                       return 'Please provide a number';
                   }
                   return true;
               }
            });
            break;

        case 'intern':
            baseQuestions.push({
                type: 'input',
                name: 'school',
                message: 'Please provide the name of the school attended',
            });
            break;

        case 'engineer':
            baseQuestions.push({
                type: 'input',
                name: 'github',
                message: 'Please provide the engineers GitHub account name',
            });
            break;

        default:
            throw new Error('You must select Manager, Intern or Engineer');
    }
    
    return inquirer.prompt(baseQuestions);
}


// ask if want to add intern or engineer
function askForInternOrEngineer() {
    return inquirer.prompt([
        {
            type: 'list',
            choices: ['Intern', 'Engineer', 'No'],
            name: 'answer',
            message: 'Do you want to add another employee?',
        }
    ])
    .then((response) => {
        switch (response.answer) {
            case 'No':
                renderPage(employees)
                break;
            
            case 'Engineer':
                askForEmployee(response.answer)
                .then((answers) => {
                    employees.push(new Engineer(...Object.values(answers)));
                })
                .then(() => askForInternOrEngineer());
                break;
            
            case 'Intern':
                askForEmployee(response.answer)
                .then((answers) => {
                    employees.push(new Intern(...Object.values(answers)));
                })
                .then(() => askForInternOrEngineer());
                break;
        }

        //     default:
        //         askForEmployee(response.answer)
        //         .then(() => askForInternOrEngineer());
        //         break;
        // }
    });
}


// Using markdown file to render the html
function renderPage(employees) {
    try {
        fs.writeFileSync('index.html', markdown.generatePage())
    } catch (err) { console.error(err)}

    try {
        for (let index = 0; index < employees.length; index++) {
            const employee = employees[index];

            if (employee.constructor.name === 'Manager') {
                fs.appendFileSync('index.html', markdown.generateManager(employee))
            }

            if (employee.constructor.name === 'Intern') {
                fs.appendFileSync('index.html', markdown.generateIntern(employee))
            }

            if (employee.constructor.name === 'Engineer') {
                fs.appendFileSync('index.html', markdown.generateEngineer(employee))
            }
        }
    } catch (err) { console.error(err) }

    try {
        fs.appendFileSync('index.html', markdown.generateEnd())
    } catch (err) { console.error(err) }
}



// const managerQuestions = [
//     {
//         type: 'input',
//         name: 'id',
//         message: 'Managers id?',
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'Managers email?',
//     },
//     {
//         type: 'input',
//         name: 'name',
//         message: 'Managers name?',
//     },
//     {
//         type: 'input',
//         name: 'officeNumber',
//         message: 'Managers office number?',
//     },            
// ];

// ask to add manager
// if user selected no
// generate the output


