// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
// const { error } = require("console")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "userName"
    },
    
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },

    {
        type: "input",
        message: "What is your project name?",
        name: "projectTitle",
    },

    {
        type: "input",
        message: "Please write a short description of your project",
        name: "projectDescription",
    },

    {
        type: "input",
        message: "What kind of license should your project have?",
        name: "projectLicense",
    },

    {
        type: "input",
        message: "What kind of license should your project have?",
        name: "projectLicense",
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile("README.md", process.argv[2], (err) =>
//     err ? console.error(err) : console.log("Success!"))
// }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions),
    .then((response)) => {
        
    }
}

// Function call to initialize app
init();
