function GetFactorial(num) {
  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

console.log(GetFactorial(7));
