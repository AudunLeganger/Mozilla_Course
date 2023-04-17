// Add your code here
let myName;
myName = "Audun";
let myAge = 26;
// Don't edit the code below here!

const section = document.querySelector("section");

const para1 = document.createElement("p");
para1.textContent = myName;
const para2 = document.createElement("p");
para2.textContent = myAge;
section.appendChild(para1);
section.appendChild(para2);
