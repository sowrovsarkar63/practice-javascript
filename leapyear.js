// Check wheather it is leap year or not 
/*
What is leap year :>>
*/

let LeapYear = 2016;
function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }

    return false;

}


console.log("is leap year : ",isLeapYear(LeapYear));