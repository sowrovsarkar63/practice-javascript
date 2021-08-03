
// Even or odd number checker 

const number =  144;
function isEven(number) {
    if (number % 2 == 0 ) {
        console.log(number," is even ");
    }else if (number % 2 != 0) {
        console.log(number , "is odd");
    }
}



isEven(number);