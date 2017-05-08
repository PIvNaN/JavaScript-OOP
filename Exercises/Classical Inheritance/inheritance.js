'use strict';

//Classical Inheritance in JavaScript:

// function person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let ID01 = new person('George', 65);
// console.log(ID01.name, ID01.age);

// let ID02 = new person('Maria', 52);
// console.log(ID02.name, ID02.age);


//Equivalent:
function person(name, age) {
    let obj = {};
    obj.name = name;
    obj.age = age;

    return obj;
}

let person01 = person('Peter', 30);
console.log(person01.name, person01.age);
