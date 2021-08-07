// 0,1,1,2,3,5,8,13,21,34,55,89,144....
/* 
3rd =  2nd + 1st
4th = 3rd + 2nd

16th =  15th + 14th;

199th =  118th + 117th

nth = (n-1) + (n-2)th 

ith = (i -1) + (i-2)

*/
let fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo);
