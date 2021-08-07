function IsleapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || 0 == year % 400) {
    return year + " is a leap year ";
  } else {
    return year + " Not leap year ";
  }
}

console.log(IsleapYear(2022));
