'use strict';

let modifies = [
    function (x) { return x + 7; },
    //  x => x + 7
    function (x) { return x * 2; },
    //  x => x * 2
    function (x) { return 42; }
    //  x => 42
];


//  (x, y) => x + y;

const sum = (x, y) => {
    console.log(x + y);
    return x * y;
}

console.log(sum(2, 3));
