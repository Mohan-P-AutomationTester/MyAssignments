//assigning global genderType
let genderType = "female"
//Creating a function printGender
function printGender(){
let colour = "Brown"
//Creating IF Block
if (genderType=="female") {

var age=30
let colour = "Pink"
console. log("Printing Colour inside IF Block", colour)
}
else{

var age = 35
let colour = "Black"
console. log("Printing the else block colour", colour)
}
console. log("Printing the age in function scope", age)
}
printGender();
//Printing global genderType console.log("printing global genderType", genderType)