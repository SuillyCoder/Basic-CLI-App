#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";
import figlet from "figlet";


program
    .version("1.0.0")
    .description("Basic CLI app")
    .option("-n, --name <type>", "Add Your Name: ")

program.action(() =>{
    inquirer
        .prompt([
            {
                type: "input",
                name: "fName",
                message: "Please register your FIRST NAME: ",
            },
            {
                type: "input",
                name: "mName",
                message: "Please register your MIDDLE NAME: ",
            },
            {
                type: "input",
                name: "lName",
                message: "Please register your LAST NAME: ",
            },
            {
                type: "number",
                name: "age",
                message: "How old are you?"
            },
            {
                type: "list",
                name: "gender",
                message: "Please indicate your gender: ",
                choices: ["Male", "Female", "Gay","Lesbian","Bisexual", "Transgender", "Asexual", "Pansexual","Aromantic", "Genderfluid"],
            },
            {
                type: "number",
                name: "mobNum",
                message: "Please indicate your mobile number: "
            },
            {
                type: "input",
                name: "email",
                message: "Please indicate your email address: ",
            },
            {
                type: "checkbox",
                name: "hearsay", 
                message: "How did you hear about the event?: ",
                choices: ["Social Media", "Friends and Peers", "The Official Site", "Advertisement", "Others"]
            },
            {
                type: "input",
                name: "date", 
                message: "Please input the event booking date: ",
            },
        ])
        .then((answers) => {
            console.log(chalk.hex('#0AE7D6')(`INDIVIDUAL IDENTITY: ${answers.fName} ${answers.mName} ${answers.lName}`));
            console.log(chalk.hex('#0AE7D6')(`AGE: ${answers.age}`));
            console.log(chalk.hex('#0AE7D6')(`ASSOCIATED GENDER : ${answers.gender}`));
            console.log(chalk.hex('#0AE7D6')(`MOBILE NUMBER: ${answers.mobNum}`));
            console.log(chalk.hex('#0AE7D6')(`EMAIL ADDRESS: ${answers.email}`));
            console.log(chalk.hex('#0AE7D6')(`SCHEDULED EVENT DATE: ${answers.date}`));
            inquirer
                .prompt([
                    {
                        type: "confirm",
                        name: "confirm",
                        message: "Please confirm the details in order to proceed with registration: ",
                        default: true
                    }
                ])
                .then((answers) => {
                    const spinner = ora(`Processing info. Please wait a moment...`).start();

                    setTimeout(() =>{
                        spinner.succeed(chalk.hex('#0AE7D6')(`Registration Success!`));

                        console.log(chalk.red(`HAPPY PRIDE MONTH EVERYBODY!!!`));
                        console.log(chalk.hex('#FF7C00')(`HAPPY PRIDE MONTH EVERYBODY!!!`));
                        console.log(chalk.yellow(`HAPPY PRIDE MONTH EVERYBODY!!!`));
                        console.log(chalk.green(`HAPPY PRIDE MONTH EVERYBODY!!!`));
                        console.log(chalk.hex('#0A95E7')(`HAPPY PRIDE MONTH EVERYBODY!!!`));
                        console.log(chalk.hex('#3535F3')(`HAPPY PRIDE MONTH EVERYBODY!!!`));
                        console.log(chalk.hex('#7E22DD')(`HAPPY PRIDE MONTH EVERYBODY!!!`));
            
                    }, 3000);

                })
                })
});

program.parse(process.argv)