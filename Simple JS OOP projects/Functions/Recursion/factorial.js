function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return factorial(n - 1) * n;
}

console.log(factorial(3));
// 6 -> 1*2*3 

console.log(factorial(4));
// 24 -> 1*2*3*4