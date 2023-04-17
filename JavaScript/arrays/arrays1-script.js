// Add your code here
const myArray = ["bacon", "burger", "pizza"];
myArray[0] = "dogmeat";
myArray[1] = "cheese";
myArray.unshift("McDun BigBeef");
// Don't edit the code below here!

const section = document.querySelector("section");

let para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;

section.appendChild(para1);
