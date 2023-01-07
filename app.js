import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function Cal() {
    let welcomeAni = chalkAnimation.rainbow("We Are CLI Calculator");
    await sleep();
    welcomeAni.stop();
    console.log(chalk.red(`
        _______________________
        |  _________________  |
        | | JO           0. | |
        | |_________________| |
        |  ___ ___ ___   ___  |
        | | 7 | 8 | 9 | | + | |
        | |___|___|___| |___| |
        | | 4 | 5 | 6 | | - | |
        | |___|___|___| |___| |
        | | 1 | 2 | 3 | | x | |
        | |___|___|___| |___| |
        | | . | 0 | = | | / | |
        | |___|___|___| |___| |
        |_____________________|`));
    console.log("Operations\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division");
    const add = 1;
    const sub = 2;
    const mul = 3;
    const div = 4;
    let DataOpt = await inquirer.prompt([
        {
            name: "num",
            message: "Which Operation you wanna do? ",
            type: "number"
        }
    ]);
    async function Addition() {
        console.log("You are in Addition Operation");
        let Data1 = await inquirer.prompt([
            {
                name: "num",
                message: "Write Number 1:",
                type: "number"
            }
        ]);
        let Data2 = await inquirer.prompt([
            {
                name: "num",
                message: "Write Number 2:",
                type: "number"
            }
        ]);
        function Add() {
            let a = Data1.num;
            let b = Data2.num;
            let c = a + b;
            return c;
        }
        console.log(chalk.greenBright(`Addition Result: ` + Add()));
    }
    async function Subtraction() {
        console.log("You are in Subtraction operation!");
        let Data1 = await inquirer.prompt([
            {
                name: "num",
                message: "Write Number 1:",
                type: "number"
            }
        ]);
        let Data2 = await inquirer.prompt([
            {
                name: "num",
                message: "Write Number 1:",
                type: "number"
            }
        ]);
        function Sub() {
            let a = Data1.num;
            let b = Data2.num;
            let c = a - b;
            return c;
        }
        console.log(chalk.greenBright(`Subtraction Result: ` + Sub()));
    }
    async function Multiplication() {
        console.log("You are in Multiplication operation!");
        let Data1 = await inquirer.prompt([
            {
                name: "num",
                message: "Write Number 1:",
                type: "number"
            }
        ]);
        let Data2 = await inquirer.prompt([
            {
                name: "num",
                message: "Write Number 1:",
                type: "number"
            }
        ]);
        function Mul() {
            let a = Data1.num;
            let b = Data2.num;
            let c = a * b;
            return c;
        }
        console.log(chalk.greenBright(`Multiplication Result: ` + Mul()));
    }
    async function Division() {
        console.log("You are in Division operation!");
        let Data1 = await inquirer.prompt([
            {
                name: "num",
                message: "Write Number 1:",
                type: "number"
            }
        ]);
        let Data2 = await inquirer.prompt([
            {
                name: "num",
                message: "Write Number 1:",
                type: "number"
            }
        ]);
        function Div() {
            let a = Data1.num;
            let b = Data2.num;
            let c = a * b;
            return c;
        }
        console.log(chalk.greenBright(`Division Result: ` + Div()));
    }
    if (DataOpt.num === add) {
        console.log("You are in Addition table");
        Addition();
    }
    else if (DataOpt.num === sub) {
        console.log("You are in Subtraction Operation");
        Subtraction();
    }
    else if (DataOpt.num === mul) {
        console.log("You are in Multiplication Operation");
        Multiplication();
    }
    else if (DataOpt.num === div) {
        console.log("You are in Division Operation");
        Division();
    }
    else {
        console.log("Chal nikal");
    }
}
Cal();
