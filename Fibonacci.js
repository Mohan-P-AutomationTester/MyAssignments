const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

rl.question("Enter the number: ", function(input) {
    let n = Number(input);

    if (isNaN(n) || n <= 0) {
        console.log("Please enter a valid positive number");
    } else {
        console.log("First " + n + " Fibonacci numbers:");
        console.log(fibonacci(n).join(", "));
    }

    rl.close();
});