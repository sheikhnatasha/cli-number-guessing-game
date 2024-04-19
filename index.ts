#! /usr/bin/env node
import inquirer from "inquirer";
import inquirei from "inquirer";

console.log("\n\twellcome to itxnatashaarif - cli number guessing game\n");

const rendomnumber = Math.floor(Math.random() * 5 + 1);

const answers = await inquirer.prompt([
    {
        name: "userguessenumber",
        type: "number",
        message: "enter your guess number(number limit from 1 to 5):",
    },
]);

if (answers.userguessenumber === rendomnumber){
    console.log("congratulations ! you guess a correct number. and you won a bycycle");
}
else{
    console.log("sorry, you guess a wrong number");
}