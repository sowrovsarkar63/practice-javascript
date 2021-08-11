// Problem 1 Solution

function seerTomon(seer) {
  // Check parameter number or not
  if (typeof seer != "number") {
    return "You have entered wrong number ";
  }
  //   check negative
  if (seer < 0) {
    return "You have to entere positive number ";
  }

  //   seer calculation
  const mon = seer / 40;
  return mon;
}

// test function using different value
console.log(seerTomon(40));
// checked done
