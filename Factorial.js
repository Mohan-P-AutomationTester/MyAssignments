const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

rl.question("Enter a number: ", function(input) {
    let num = Number(input);

    if (isNaN(num) || num < 0) {
        console.log("Please enter a valid non-negative number");
    } else {
        console.log("Factorial of " + num + " is " + factorial(num));
    }

    rl.close();
});