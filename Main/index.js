//Imports Node packages
const fs = require("fs");
const inquirer = require("inquirer");

//Imports paths for questions and generateMarkdown function
const generateMarkdown = require("../utils/generateMarkdown")
const {questions} = require("../utils/questions")


//Function to create README.MD
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!"))
}

//Function to initialize inquirer
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
