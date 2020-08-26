const fs = require("fs");

const inquirer = require("inquirer");

const questions = [
  //ask the user for the name of the app
  {
    type: "input",
    name: "repoName",
    message:
      "What is name of this application? (This will aslo the main header of the README)",
  },
  //ask for the users github username
  {
    type: "input",
    name: "githubName",
    message: "What is your username on Github?",
  },
  //ask for the users description of the project
  {
    type: "input",
    message: "Write a description of this application",
    name: "description",
  },
  // How do you install your app?
  {
    type: "input",
    message:
      "How does a user install your application? Provide instuctions here",
    name: "appInstall",
  },
  // How does a user use your application?
  {
    type: "input",
    message: "How does a user use your application?",
    name: "appInstructions",
  },
  //How would a user of the application report an issue
  {
    type: "input",
    message:
      "Would you like you users to be able to report issues or contribute to this project?",
    name: "appIssues",
  },
  //Type of license being used
  {
    type: "input",
    message:
      'What license would you like to use? If you do not wish to use a license type "none" ',
    name: "license",
  },
  //Who else will contribute to the application other than the user
  {
    type: "input",
    message: "Who else contributed to your application?",
    name: "contributors",
  },
];

async function init() {
  const response = await inquirer.prompt(questions);
  const handleResponse = (response) => {
    //creating first header for title of the project the user is doing
    fs.appendFileSync(
      "README.md",
      "# " + response.repoName + "\n" + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    // section that will create the github username of the user
    fs.appendFileSync(
      "README.md",
      "This application was developed by: " + response.githubName + "\n" + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    // section that will create the description of what the project is about
    fs.appendFileSync(
      "README.md",
      "## Description" + "\n" + response.description + "\n" + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    //creates a section for what installation will be used for the users app
    fs.appendFileSync(
      "README.md",
      "## Installation" + "\n" + response.appInstall + "\n" + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    // section where the user will discuess how others will use the application
    fs.appendFileSync(
      "README.md",
      "## How to use the Application" +
        "\n" +
        response.appInstructions + "\n" + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    // section that asks users if they will allow users to report issues
    fs.appendFileSync(
      "README.md",
      "## Issue Reporting and Contributing" +
        "\n" +
        response.appIssues + "\n" +"\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    // section where users can add other contributors to project
    fs.appendFileSync(
      "README.md",
      "## Other Contibuting Developers:" +
        "\n" +
        response.contributors + "\n" + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
    // section for user to show licneses being used
    fs.appendFileSync(
      "README.md",
      "## License" + "\n" + response.license + "\n" + "\n",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Success");
        }
      }
    );
  };
  handleResponse(response);
}

//command to run the README.md file
init();
