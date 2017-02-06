function fibonacci(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(4));
// 5

console.log(fibonacci(5));
// 8