const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Another method for reverse string
// function reverseString(value) {
    
//     let reversed = value.split('').reverse().join('');
//     return  reversed;
// }

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        //reversed += str[i];
        reversed = reversed + str[i];
    }
    return reversed;
}

rl.question("Enter a string: ", function(input) {
    if (input.trim() === "") {
        console.log("Please enter something");
    } else {
        console.log("Original String: " + input);
        console.log("Reversed String: " + reverseString(input));
    }
    rl.close();
});