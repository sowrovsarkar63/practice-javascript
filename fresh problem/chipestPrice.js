const phones = [
  { name: "samsung s5 ", price: 14000, camera: 10, storage: 32 },
  { name: "walton m32 ", price: 15000, camera: 8, storage: 8 },
  { name: "shaomi  m3 ", price: 12000, camera: 8, storage: 16 },
  { name: "oppo ", price: 1300, camera: 8, storage: 10 },
  { name: "nokia n95  ", price: 25000, camera: 10, storage: 32 },
];
let cheapest = phones[0];

for (const phone of phones) {
  //   compare price only
  if (phone.price < cheapest.price) {
    cheapest = phone;
  }
}
console.log("cheapest phone is ", cheapest.name);
