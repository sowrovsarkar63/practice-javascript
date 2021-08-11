// Problem 2 solution
function totalSale(numberOfshirt, numberOfpant, numberOfshoe) {
  //Product price
  const shirtPrice = 100;
  const pantPrice = 200;
  const shoePrice = 500;

  //   Check Input parameter
  if (
    typeof numberOfshirt != "number" ||
    typeof numberOfpant != "number" ||
    typeof numberOfshoe != "number"
  ) {
    return "You have to enter Number ";
  }
  if (numberOfshirt && numberOfpant && numberOfshoe < 0) {
    return "You've to give postive number ";
  }

  //   Calculate price by quantity of the product
  let totalShirtPrice = shirtPrice * numberOfshirt;
  let totalPantPrice = pantPrice * numberOfpant;
  let totalShoePrice = shoePrice * numberOfshoe;

  //   Total sell with quantity of product
  const TotalSell = totalShirtPrice + totalPantPrice + totalShoePrice;
  return TotalSell;
}

// Test function with different value

const sellCounter = totalSale(5, 2, 1);

console.log(sellCounter);
// Checked done
