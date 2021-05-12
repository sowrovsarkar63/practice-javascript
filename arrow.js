// function _sum(n){
//     const summation = n.reduce(function(o,n){
//         return o + n
//     })

//     return summation
// }

// // console.log(sum([1,2,3,45]));


// const sum = (n) => {
//     const summation =  n.reduce((o,n) => {
//         return o + n
//     })
//     return summation
// }

// console.log(sum([1,2,3]))

const sum = (n) => n.reduce((o,n) =>o+n)

console.log(sum([1,2,3]));