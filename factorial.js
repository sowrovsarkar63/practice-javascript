// factorial 
// 
// let factNumber = 7;
// let factorial = 1;
// 
// for(let i = 1; i <= factNumber; i++){
//     factorial = factorial * i;
// 
// }
// 
// console.log(factorial);

// function getFactorial(number) {
//     let factorial =  1;
//     for(let i = 1; i <= number; i++){
//         factorial = factorial * i;
//     }
//     return factorial;
// }
// 
// const getMyfactorial = getFactorial(7);
// 
// console.log(getMyfactorial);

function getFactorial(number) {
    let factorial = 1;
    let i =  1;
    while (i <= number) {
        factorial  = factorial * i;
        i++;
    }
    return factorial;
}

const getMyfactorial = getFactorial(10);
console.log(getMyfactorial);