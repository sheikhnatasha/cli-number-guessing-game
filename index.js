#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
console.log("\n\twellcome to itxnatashaarif - cli number guessing game\n");
var rendomnumber = Math.floor(Math.random() * 5 + 1);
var answers = await inquirer_1.default.prompt([
    {
        name: "userguessenumber",
        type: "number",
        message: "enter your guess number(number limit from 1 to 5):",
    },
]);
if (answers.userguessenumber === rendomnumber) {
    console.log("congratulations ! you guess a correct number. and you won a bycycle");
}
else {
    console.log("sorry, you guess a wrong number");
}
