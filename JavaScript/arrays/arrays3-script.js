let myArray = [
  "Ryu",
  "Ken",
  "Chun-Li",
  "Cammy",
  "Guile",
  "Sakura",
  "Sagat",
  "Juri",
];
// Add your code here
myArray.pop();
myArray.push("M. Bison", "E. Honda");
mappedArray = myArray.map((item, index) => {
  return item + ` (${index})`;
});
console.log(mappedArray);
let myString = "";
mappedArray.forEach((value) => {
  myString += `${value} - `;
});
myString = myString.slice(0, myString.length - 2);
// Don't edit the code below here!

const section = document.querySelector("section");

let para1 = document.createElement("p");
para1.textContent = myString;

section.appendChild(para1);
