const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number for multiplication table: ", function(input) {
    let num = Number(input);

    if (isNaN(num)) {
        console.log("Please enter a valid number");
    } else {
        console.log("Multiplication Table of " + num);
        for (let i = 1; i <= 10; i++) {
            console.log(num + " x " + i + " = " + (num * i));
        }
    }

    rl.close();
});