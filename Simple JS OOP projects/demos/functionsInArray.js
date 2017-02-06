"use strict"

"use strict"

const modifies = [
    function (x) { return x + 7; },
    function (x) { return x * 2; },
    function (x) { return 42; }
];

function applyFunctionOver11(f) {
    return f(11);
}

modifies.map(applyFunctionOver11)
    .forEach(x => console.log(x));


// Or:

modifies.map(f => f(11))
    .forEach(x => console.log(x));
