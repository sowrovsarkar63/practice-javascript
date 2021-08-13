/* // Manuplate dom by html tag name
const HeadingTag = document.getElementsByTagName("h3");
for (const title of HeadingTag) {
  console.log(title.innerText);
}

// Manupulate by id

const header = document.getElementById("Header");
header.style.color = "red";
// header.style.textAlign = "center";
header.style.margin = "0 auto";
header.style.borderBottom = "2px solid ";
header.style.borderWidth = "10px";
header.style.maxWidth = "400px";
header.setAttribute("title", "this is tooltip"); */

// quesry selector ..

// Create element

let header = document.getElementById("Header");
// create new element
let h1 = document.createElement("h1");

// Add some text
header.innerText = "Blogs heading ";
header.style.color = "red";
header.style.fontSize = "25px";
header.style.textAlign = "center";
// append in the parent div
header.appendChild(h1);
