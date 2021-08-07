function largestElement(numbers) {
  let largest = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

let arr = [23, 43, 44, 54, 32];

const oldest = largestElement(arr);
console.log(oldest);
