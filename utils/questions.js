const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },

    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },

    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },

    {
        type: "input",
        message: "What is your project name?",
        name: "title",
    },

    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description",
    },

    {
        type: "input",
        message: "Please tell us how to install your project.",
        name: "installation",
    },

    {
        type: "input",
        message: "Please describe how to use your project.",
        name: "usage",
    },

    {
        type: "list",
        message: "What kind of license should your project have?",
        choices: ["Apache","MIT", "Mozilla Public License", "None"],
        name: "license",
    },

    {
        type: "input",
        message: "What are your guidelines for others to contribute?",
        name: "contributing",
    },

    {
        type: "input",
        message: "Write test instructions for your project.",
        name: "tests",
    },
];

module.exports = {questions}