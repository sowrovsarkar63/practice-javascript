function deliveryCost(numberOfshirt) {
  // Define delivery charge
  const firstDeliveryCharge = 100;
  const secondDeliveryCharge = 80;
  const thirdDeliveryCharge = 50;

  //   Check input value -===========

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
