const cart = [
  { name: "laptop", price: 99999, quantity: 1 },
  { name: "shirt", price: 1000, quantity: 4 },
  { name: "watch", price: 4050, quantity: 1 },
  { name: "phone", price: 49050, quantity: 1 },
  { name: "bag", price: 2500, quantity: 1 },
];

let cartTotal = 0;

for (const product of cart) {
  console.log(product);
  const productTotal = product.price * product.quantity;
  cartTotal += productTotal;
}

console.log(cartTotal);
