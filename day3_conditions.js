//Day 3 
//odd/even number checker
//Method 1
function checkOddEven(number){
let result = number%2
if(number%2==0){
console.log(number + " is an Even Number");
}
else{
console.log(number + " is an Odd Number");
}
}
checkOddEven(10);
checkOddEven(7);

//Method 2
var num = 10;
function isOddorEven(num){
if(num%2==0){
console.log("The given number is Even");
}
else{
console.log("The given number is Odd");
}
}
isOddorEven(num);


//Number type
let numberType=2;
 function numberTypeCheck(numberType){
   
    if(numberType>0){
        console.log("The given number is positive");
    }   
    else if(numberType<0){
        console.log("The given number is negative")
    }
    else {
    console.log("The given number is neutral");     
}
}   
numberTypeCheck(numberType);

//conditional statements
var browserName="Firefox";
function launchBrowser(browserName){
    if(browserName=="Chrome"){
        console.log("Launching Chrome Browser");
    }       
    else if(browserName=="Firefox"){
        console.log("Launching Firefox Browser");
    }
    else if(browserName=="Edge"){
        console.log("Launching Edge Browser");
    }
    else{
        console.log("Browser not supported");
    }

var testType="smoke";
function runTests(){
    switch(testType){
        case "smoke":
            console.log("Running Smoke Tests"); 
            break;
        case "regression":
          console.log("Running Regression Tests");
            break;  
        case "sanity":
            console.log("Running Sanity Tests");
            break;  
        default:
            console.log("No Tests to run");
    }
} 
runTests();
}  
launchBrowser();
