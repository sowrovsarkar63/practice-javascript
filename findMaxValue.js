const business = 4050;
const minister = 550;
const army = 600;
// if (business > minister) {
//   console.log("Business person er pola is bigger");
// } else {
//   console.log("Minishter er pola is bigger ");
// }

// if (business > minister && business > army) {
//   console.log("Business is bigger");
// } else if (minister > business && minister > army) {
//   console.log("Minister is bigger");
// } else {
//   console.log("Army is bigger");
// }

var max = Math.max(business, minister, army);
console.log("largest is ", max);
