const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function areAnagrams(str1, str2) {
    let sorted1 = str1.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    let sorted2 = str2.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    return sorted1 === sorted2;
}

rl.question("Enter first string: ", function(str1) {
    rl.question("Enter second string: ", function(str2) {
        if (areAnagrams(str1, str2)) {
            console.log(`"${str1}" and "${str2}" are anagrams`);
        } else {
            console.log(`"${str1}" and "${str2}" are not anagrams`);
        }
        rl.close();
    });
});