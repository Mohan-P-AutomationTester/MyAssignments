const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

rl.question("Enter a number: ", function(input) {
    let num = Number(input);

    // Check if input is valid number
    if (isNaN(num)) {
        console.log("This is not a number");
    } 
    else if (isPrime(num)) {
        console.log(num + " is a Prime number");
    } else {
        console.log(num + " is not a Prime number");
    }

    rl.close();
});