/* const btn = document.querySelector("button");

// Generate random number
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function () {
  const RandomColor =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = RandomColor;
};
 */
/* const BlueBtn = document.getElementById("BlueBtn");

BlueBtn.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
 */
const greenBtn = document.getElementById("GreenBtn");
greenBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
  document.body.style.transition = "3s";
});
