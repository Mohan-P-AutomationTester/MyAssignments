const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function firstNonRepeatingChar(str) {
    let charCount = {};

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

rl.question("Enter a string: ", function(input) {
    if (input.trim() === "") {
        console.log("Please enter a valid string");
    } else {
        let result = firstNonRepeatingChar(input);
        if (result) {
            console.log("First non-repeating character: " + result);
        } else {
            console.log("No non-repeating character found");
        }
    }
    rl.close();
});