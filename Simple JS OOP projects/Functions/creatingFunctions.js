"use strict"

//Function declaration:

function printFunc(func) {
    console.log(func);
}


//Function expression:

const printFunc = function () {
    console.log(func);
}


//Function expression with fat arrow:

const printFunc = (func) => console.log(`Message: ${func}`);


//With function constructor:

const printFunc = new Function("func", 'console.log("func");');