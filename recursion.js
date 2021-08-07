// Get factorial via recursive function

/* function factorial(n) {
  if (n == 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

const MyFactorial = factorial(7);

console.log(MyFactorial);
 */

/* function recursion() {
  console.log(1);
  recursion();
}

console.log(recursion());
 */

function log(num) {
  if (num > 5) {
    return;
  }
  console.log(num);
  log(num + 1);
}

log(1);
