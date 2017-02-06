"use strict"

const modifiers = [
    function (x) { return x + 1; },
    function (x) { return x * 1; },
    function (x) { return 1; }
];

const modifiers2 = [
    function (x) { return x + 2; },
    function (x) { return x * 2; },
    function (x) { return 2; }
];

const modifiers3 = [
    function (x) { return x + 3; },
    function (x) { return x * 3; },
    function (x) { return 3; }
];

Array.prototype.someFunc = function () {
    console.log(this[0].toString());
};

modifiers.someFunc();
modifiers2.someFunc();
modifiers3.someFunc();