const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isArmstrong(num) {
    let sum = 0;
    let digits = num.toString().length;
    let temp = num;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** digits;
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

rl.question("Enter a number: ", function(input) {
    let num = Number(input);

    if (isNaN(num) || num < 0) {
        console.log("Please enter a valid non-negative number");
    } else if (isArmstrong(num)) {
        console.log(num + " is an Armstrong number");
    } else {
        console.log(num + " is not an Armstrong number");
    }

    rl.close();
});