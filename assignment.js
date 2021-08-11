/*========================== Problem number one solution ================================== */
function seerToMon(seer) {
  // Check parameter number or not
  if (typeof seer != "number") {
    return "You have entered wrong number ";
  }
  // check negative
  if (seer < 0) {
    return "You have to entered positive number ";
  }
  // seer calculation
  const mon = seer / 40;
  return mon;
}
// test function using different value
console.log(seerTomon(200));
/*========================== Problem number two solution ================================== */
function totalSales(numberOfshirt, numberOfpant, numberOfshoe) {
  //Product price
  const shirtPrice = 100;
  const pantPrice = 200;
  const shoePrice = 500;
  // Check Input parameter
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
  // Calculate price by quantity of the product
  let totalShirtPrice = shirtPrice * numberOfshirt;
  let totalPantPrice = pantPrice * numberOfpant;
  let totalShoePrice = shoePrice * numberOfshoe;
  // Total sell with quantity of product
  const TotalSell = totalShirtPrice + totalPantPrice + totalShoePrice;
  return TotalSell;
}
// Test function with different value
const sellReport = totalSales(5, 2, 2);
console.log(sellReport);
/*========================== Problem number three solution ================================== */
function deliveryCost(numberOfshirt) {
  // Define delivery charge
  const firstDeliveryCharge = 100;
  const secondDeliveryCharge = 80;
  const thirdDeliveryCharge = 50;
  // Check input value ===========
  if (typeof numberOfshirt != "number" || numberOfshirt < 0) {
    return "You have to enter positive number ";
  }
  // first 100 shirt
  if (numberOfshirt <= 100) {
    const totaldeliveryCost = numberOfshirt * firstDeliveryCharge;
    return totaldeliveryCost;
  } else if (numberOfshirt > 100 && numberOfshirt <= 200) {
    //second 100 shirt
    const first100deliveryCost = 100 * firstDeliveryCharge;
    const Nextshirt = numberOfshirt - 100;
    const second100DeliveryCost = Nextshirt * secondDeliveryCharge;
    const totaldeliveryCost = first100deliveryCost + second100DeliveryCost;
    return totaldeliveryCost;
  } else {
    // shirt after 200 and more
    const first100deliveryCost = 100 * firstDeliveryCharge;
    const second100DeliveryCost = 100 * secondDeliveryCharge;
    const Nextshirt = numberOfshirt - 200;
    const ThirdDeliveryCost = Nextshirt * thirdDeliveryCharge;
    const totaldeliveryCost =
      first100deliveryCost + second100DeliveryCost + ThirdDeliveryCost;
    return totaldeliveryCost;
  }
}
// Check function here
const GetDeliveryCost = deliveryCost(250);
console.log(GetDeliveryCost);
/*========================== Problem number four solution ================================== */
function perfectFriend(friends) {
  // Define best friend empty vairable
  let GetFriendName = "";
  // Check input value
  if (friends.length == 0) {
    return "You've entered empty array ";
  }
  if (typeof friends != "object") {
    return "You've never passed array object ";
  }
  // Loop through the array and check the condition
  for (const friendName of friends) {
    if (friendName.length == 5) {
      GetFriendName = friendName;
      break; //If got 5 length name then break .
    }
  }
  return GetFriendName;
}
// test function
const FriendList = ["emon", "asif", "ashik", "akher", "zion"];
console.log(perfectFriend(FriendList)); //ashik
