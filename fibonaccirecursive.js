// 0,1,1,2,3,5,8,13,21,34,55,89,144....
/* 
3rd =  2nd + 1st
4th = 3rd + 2nd

16th =  15th + 14th;

199th =  118th + 117th

nth = (n-1) + (n-2)th 

ith = (i -1) + (i-2)

*/
/* function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fiboElement = fibonacci(6);
console.log(fiboElement);
 */

function fibonacciSeries(n) {
  if (n == 0) {
    return [0];
  }
  if (n == 1) {
    return [0, 1];
  }
  const fibo = fibonacciSeries(n - 1);
  const nextElement = fibo(n - 1) + fibonacciSeries(n - 2);
}
