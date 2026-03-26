const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countWords(str) {
    let words = str.toLowerCase().split(/\s+/);
    let wordCount = {};

    for (let word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    return wordCount;
}

function countLetters(str) {
    let letters = str.toLowerCase().replace(/\s+/g, '').split('');
    let letterCount = {};

    for (let letter of letters) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    return letterCount;
}

rl.question("Enter a text: ", function(input) {
    if (input.trim() === "") {
        console.log("Please enter a valid text");
    } else {
        console.log("Original Text: " + input);
        console.log("Word Count:", countWords(input));
        console.log("Letter Count:", countLetters(input));
    }
    rl.close();
});