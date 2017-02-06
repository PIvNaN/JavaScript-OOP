"use strict"

let arr = [3, 2, 1, 3, 4, 5, 1, 2, 3, 4, 5, 7, 9];

function orderBy(a, b) {
    return a - b;
}
console.log(arr.sort(orderBy));


// Or:
console.log(arr.sort(function (a, b) { return a - b; }));


// Or:
console.log(arr.sort((a, b) => a - b));