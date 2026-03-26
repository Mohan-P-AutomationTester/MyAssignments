const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findDuplicates(arr) {
    let duplicates = [];
    let seen = {};

    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            if (!duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        } else {
            seen[arr[i]] = 1;
        }
    }

    return duplicates;
}

rl.question("Enter array elements separated by comma: ", function(input) {
    let array = input.split(",").map(item => item.trim());

    if (array.length === 0) {
        console.log("Please enter a valid array");
    } else {
        console.log("Original Array: " + array);
        console.log("Duplicates: " + findDuplicates(array));
    }

    rl.close();
});