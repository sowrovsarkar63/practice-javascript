const numbers = [44, 23, 34, 32, 54, 5, 78, 2];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  sum = sum + element;
}
console.log(sum);

function ArrayTotal(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    sum = sum + element;
  }
  return sum;
}
console.log(ArrayTotal([2, 3, 4, 5]));
