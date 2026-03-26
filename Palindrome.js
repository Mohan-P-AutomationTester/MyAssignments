const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(value) {
    let str = value.toString();
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

rl.question("Enter a value: ", function(input) {

    // Optional: check if empty
    if (input.trim() === "") {
        console.log("Please enter something");
    } 
    else if (isPalindrome(input)) {
        console.log(input + " is a Palindrome");
    } else {
        console.log(input + " is not a Palindrome");
    }

    rl.close();
});