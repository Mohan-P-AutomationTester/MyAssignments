const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", function(input1) {
    rl.question("Enter second number: ", function(input2) {
        let a = Number(input1);
        let b = Number(input2);

        if (isNaN(a) || isNaN(b)) {
            console.log("Please enter valid numbers");
        } else {
            console.log("Before Swap: a = " + a + ", b = " + b);

            // Swap using temporary variable
            let temp = a;
            a = b;
            b = temp;

            console.log("After Swap: a = " + a + ", b = " + b);

            // Alternative without temp
            // [a, b] = [b, a];
            // console.log("After Swap (without temp): a = " + a + ", b = " + b);
        }

        rl.close();
    });
});