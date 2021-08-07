const name = [
  "sowrov",
  "sarkar",
  "mahbubul",
  "hello",
  "hacker",
  "hacker",
  "hi",
  "frontend",
  "fullstack",
  "backend",
  "coding",
  "coding",
  "sowrov",
];
console.log("With duplicate name ", name);
function removeDuplicaate(names) {
  const uniqueName = [];

  /* for (let i = 0; i < names.length; i++) {
    const element = names[i];
    if (uniqueName.indexOf(element) == -1) {
      uniqueName.push(element);
    }

  } */

  //   for of loop

  for (const element of names) {
    if (uniqueName.indexOf(element) == -1) {
      uniqueName.push(element);
    }
  }
  console.log("Unique name", uniqueName);
}

removeDuplicaate(name);
