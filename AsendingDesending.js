const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter array elements separated by comma: ", function(input) {
    let array = input.split(",").map(item => Number(item.trim()));

    if (array.length === 0 || array.some(isNaN)) {
        console.log("Please enter valid numbers");
    } else {
        console.log("Original Array: " + array);

        let ascending = [...array].sort((a, b) => a - b);
        console.log("Ascending Order: " + ascending);

        let descending = [...array].sort((a, b) => b - a);
        console.log("Descending Order: " + descending);
    }

    rl.close();
});