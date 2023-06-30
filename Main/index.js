// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("../utils/generateMarkdown")
const {questions} = require("../utils/questions")

// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
      console.log(response)
      const readMe = generateMarkdown(response)
      writeToFile("README.md", readMe)
    }
 )
}


// Function call to initialize app
init();
