const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }

    return { max, min };
}

rl.question("Enter array elements separated by comma: ", function(input) {
    let array = input.split(",").map(item => Number(item.trim()));

    if (array.length === 0 || array.some(isNaN)) {
        console.log("Please enter valid numbers");
    } else {
        let result = findMaxMin(array);
        console.log("Array: " + array);
        console.log("Maximum: " + result.max);
        console.log("Minimum: " + result.min);
    }

    rl.close();
});