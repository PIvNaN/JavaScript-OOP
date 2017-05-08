function solve() {
    return function (num) {
        for (let i = 0; i < num.length; i += 1) {
            if (Number.isNaN(Number(num[i]))) {
                throw '';
            }
        }
        if (num.length === 0) {
            return null;
        }
        return num.reduce((x, y) => x + (+y), 0);
    }
}