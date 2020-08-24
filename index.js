const fs=require("fs");

const inquirer=require("inquirer");

const questions=[
    //ask the user for the name of the app
    {
        type="input",
        name="repoName",
        massage="What is the name of this application?"
    },
    //ask for the users github username
    {
        type="input",
        name="githubName",
        message="What is your github username?"
    },
    //ask for the users description of the project
    {
        type="input",
        name="description",
        message="Write a discription about this application"
    },
    // How do you install your app? 
    {
        type: "input",
        message: "How does a user install your application?",
        name: "installApp",
     
    },
    //How does user use their app
    {
        type:"input",
        name:"usage",
        message:"Provide instructions on how a user will use your applications"
    },
    //How would a user of the application report an issue
    {
        type:"input",
        name:"issues",
        message:"Will users be able to report issues for testing purposes?"
    },
    //Type of license being used(badge)
    {
        type:"input",
        name:"license",
        message:"What type of license will you be using? If you do not have a license, please type leave empty."
    },
    //Who else will contribute to the application other than the user
    {
        type:"input",
        name:"contributors",
        message:"Who else will be contributing in this appliation?"
    }

];

function init() {
inquirer.prompt(questions).then((response)=>{
//creating the first line and main header for the repo using "#" as a header markdown

fs.appendFileSync("README.md",("#") + response.repoName + '\n', function(err){
    if(err) {
        console.log(err)
    }else {
        console.log("Successfull")
    }
});

//create second line that will format the users github name and who is developing the project
fs.appendFileSync("README.md",("This application was developed by: " + response.githubName + '\n') + '\n', function(err){
    if(err){
        console.log(err)
    }else{
        console.log("SuccessfUll")
    }
});

//user can add description of the project
fs.appendFileSync("README.md",("## Description" + '\n' + response.description) + '\n', function(err){
    if (err) {
        console.log(err)
    }else{
        console.log("SuccessfUll")
    }
});

//creating section for user to describe how to install the app
fs.appendFileSync("README.md",("## Application Installation" + '\n' + response.installApp) + '\n', function(err) {
     if (err) {
        console.log(err)
    }else{
        console.log("SuccessfUll")
    }
});

//creating section for users to describe the usage of Application 
fs.appendFileSync("README.ms",("##Application Usage" + '\n' + response.usage) + '\n', function(err){
if (err) {
        console.log(err)
    }else{
        console.log("SuccessfUll")
    }
});

//section for user to describe issues
fs.appendFileSync("README.md",("##ISSUES" + '\n' + response,issues) + '\n', function(err){
    if (err) {
        console.log(err)
    }else{
        console.log("SuccessfUll")
    }
});

//section for user to input other developers that are contributing 
fs.appendFileSync("README.md", ("## Other Contributors" + '\n' + response.contributors) + '\n', function(err) {
    if (err) {
        console.log(err)
    }else{
        console.log("SuccessfUll")
    }
});

//section for licenses being used by user
fs.appendFileSync("README.md", ("## License" + '\n' + response.license) + '\n', function(err){
     if (err) {
        console.log(err)
    }else{
        console.log("SuccessfUll")
    }
});





});

}

//run the function of questions in order to generate Readme file
init();