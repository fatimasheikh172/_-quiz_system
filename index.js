#! /usr/bin/env node
import inquirer from "inquirer";
console.log("*********************************");
console.log("*        Quiz system            *");
console.log("*********************************");
const { name } = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your name"
    }
]);
const quiz = await inquirer.prompt([
    {
        name: "Question_1",
        type: "list",
        message: "\nq1_What is the file extension for TypeScript files?",
        choices: [".ts", ".js", ".txt", ".html"]
    },
    {
        name: "Question_2",
        type: "list",
        message: "\nq2_What keyword is used to declare a variable in TypeScript?",
        choices: ["var", "let", "const", "Both b & c"]
    },
    {
        name: "Question_3",
        type: "list",
        message: "\nq3_Which of the following characters is commonly allowed in variable names in Typescript?",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "Question_4",
        type: "list",
        message: "\nq4_Which operator is commonly used for string concatenation in Typescript?",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "Question_5",
        type: "list",
        message: "\nq5_In Typescript, which symbol is commonly used to terminate a statement?",
        choices: [".", ":", ";", ","]
    },
    {
        name: "Question_6",
        type: "list",
        message: "\nq6_Which operator is used to perform type assertion in TypeScript?",
        choices: [":", "=", "<>", "!"]
    },
    {
        name: "Question_7",
        type: "list",
        message: "\nq7_Which symbol is used to start a single-line comment in TypeScript?",
        choices: ["//", "#", "&", "@"]
    },
    {
        name: "Question_8",
        type: "list",
        message: "\nq8_Which of the following is an arithmetic operator in TypeScript?",
        choices: ["&&", "//", "+", "!"]
    },
    {
        name: "Question_9",
        type: "list",
        message: "\nq9What is the result of the logical AND (&&) operator when both operands are true?",
        choices: ["true", "false", "null", "undefined"]
    },
    {
        name: "Question_10",
        type: "list",
        message: "\nq10_What is the correct way to check if two values are equal in TypeScript?",
        choices: ["a===b", "a==b", "a=b", "a!=b"]
    }
]);
let score = 0;
switch (quiz.Question_1) {
    case ".ts":
        console.log("1. Correct");
        ++score;
        break;
    default:
        console.log("1. Incorrect");
}
switch (quiz.Question_2) {
    case "Both b & c":
        console.log("2. Correct");
        ++score;
        break;
    default:
        console.log("2. Incorrect");
}
switch (quiz.Question_3) {
    case "$":
        console.log("3. Correct");
        ++score;
        break;
    default:
        console.log("3. Incorrect");
}
switch (quiz.Question_4) {
    case "+":
        console.log("4. Correct");
        ++score;
        break;
    default:
        console.log("4. Incorrect");
}
switch (quiz.Question_5) {
    case ";":
        console.log("5. Correct");
        ++score;
        break;
    default:
        console.log("5. Incorrect");
}
switch (quiz.Question_6) {
    case ":":
        console.log("6. Correct");
        ++score;
        break;
    default:
        console.log("6. Incorrect");
}
switch (quiz.Question_7) {
    case "//":
        console.log("7. Correct");
        ++score;
        break;
    default:
        console.log("7. Incorrect");
}
switch (quiz.Question_8) {
    case "+":
        console.log("8. Correct");
        ++score;
        break;
    default:
        console.log("8. Incorrect");
}
switch (quiz.Question_9) {
    case "true":
        console.log("9. Correct");
        ++score;
        break;
    default:
        console.log("9. Incorrect");
}
switch (quiz.Question_10) {
    case "a===b":
        console.log("10. Correct");
        ++score;
        break;
    default:
        console.log("10. Incorrect");
}
console.log(`\nResult. \nDear ${name}, you got ${score} mark out of 10\n`);
// Result based message:
if (score === 10) {
    console.log("Remarks: \nImpresive, excellent work");
}
else if (score >= 7) {
    console.log("Remarks: \nExcellent, Keep it up");
}
else if (score >= 5) {
    console.log("Remarks: \n good, but need more improvement");
}
else if (score >= 3) {
    console.log("Remarks: \nSaticfactory , but you need work harrder");
}
else {
    console.log("Remarks: \nPoor, you need more and more work hard");
}
