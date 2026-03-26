const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findRepeatedWords(str) {
    let words = str.toLowerCase().split(/\s+/);
    let wordCount = {};
    let repeatedWords = [];

    for (let word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
        if (wordCount[word] === 2) {
            repeatedWords.push(word);
        }
    }
    return repeatedWords;
}

function findRepeatedLetters(str) {
    let letters = str.toLowerCase().replace(/\s+/g, '').split('');
    let letterCount = {};
    let repeatedLetters = [];

    for (let letter of letters) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
        if (letterCount[letter] === 2) {
            repeatedLetters.push(letter);
        }
    }
    return repeatedLetters;
}

rl.question("Enter a text: ", function(input) {
    if (input.trim() === "") {
        console.log("Please enter a valid text");
    } else {
        console.log("Original Text: " + input);
        console.log("Repeated Words: " + findRepeatedWords(input));
        console.log("Repeated Letters: " + findRepeatedLetters(input));
    }
    rl.close();
});