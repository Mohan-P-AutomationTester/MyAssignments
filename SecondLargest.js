const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function secondLargest(arr) {
    if (arr.length < 2) return null;

    let max = -Infinity;
    let secondMax = -Infinity;

    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max) {
            secondMax = num;
        }
    }

    return secondMax === -Infinity ? null : secondMax;
}

rl.question("Enter array elements separated by comma: ", function(input) {
    let array = input.split(",").map(item => Number(item.trim()));

    if (array.length < 2 || array.some(isNaN)) {
        console.log("Please enter at least two valid numbers");
    } else {
        console.log("Array: " + array);
        console.log("Second Largest Number: " + secondLargest(array));
    }

    rl.close();
});