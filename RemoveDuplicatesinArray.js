const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

rl.question("Enter array elements separated by comma: ", function(input) {
    let array = input.split(",").map(item => Number(item.trim()));

    if (array.length === 0 || array.some(isNaN)) {
        console.log("Please enter valid numbers");
    } else {
        console.log("Original Array: " + array);
        console.log("Array without duplicates: " + removeDuplicates(array));
    }

    rl.close();
});