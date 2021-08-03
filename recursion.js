function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n-1);
}

const getMyfactorial = factorial(7);
console.log(getMyfactorial);