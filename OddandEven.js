const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(input) {
    let num = Number(input);

    // Check if input is NOT a number
    if (isNaN(num)) {
        console.log("This is not a number");
    } 
    // Check odd or even
    else if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }

    rl.close();
});