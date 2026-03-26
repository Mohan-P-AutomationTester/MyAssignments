const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function removeDuplicateChars(str) {
    let result = "";
    for (let char of str) {
        if (!result.includes(char)) {
            result += char;
        }
    }
    return result;
}

rl.question("Enter a string: ", function(input) {
    if (input.trim() === "") {
        console.log("Please enter a valid string");
    } else {
        console.log("Original String: " + input);
        console.log("String without duplicates: " + removeDuplicateChars(input));
    }
    rl.close();
});