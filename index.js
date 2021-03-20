//NPM That allows us to ask questions via terminal and return the user inputs
const inquirer = require("inquirer");
//Utility JS, uses answers to generate our readme content
const generateMarkdown = require("./utils/generateMarkdown.js");
//NPM that allows us to save files
const fs = require("fs");

//Variable containing all the user prompts to build our readme.
const userQuestions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "projDesc",
    message: "Write a description for your project.",
  },
  {
    type: "input",
    name: "installDesc",
    message: "What commands does the user need to run to install your project",
  },
  {
    type: "input",
    name: "gitHubUsername",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your Email Address?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to apply to your project?",
    choices: ["GPL", "Apache", "BSD", "MIT", "None"],
  },
  {
    type: "input",
    name: "usage",
    message: "Please specify any usage instructions for your project",
  },
  {
    type: "input",
    name: "test",
    message: "Provide an example on how to run tests on your project.",
  },
  {
    type: "input",
    name: "contribution",
    message: "How can users make contributions to your project?",
  },
];

//Runs the inquirer prompts
function runPrompts() {
  inquirer.prompt(userQuestions).then((data) => {
    const generatedMD = generateMarkdown(data);

    fs.writeFile("README.md", generatedMD, (err) =>
      err
        ? console.log(err)
        : console.log("Successfully generated your Readme!")
    );
  });
}

//Runs our prompts in the console on "page" load
runPrompts();
