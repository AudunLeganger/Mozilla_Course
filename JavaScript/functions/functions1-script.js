const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.createElement("p");

// Add your code here
const random = (array) => array[Math.floor(Math.random() * array.length)];
para.textContent = random(names);
// Don't edit the code below here!

const section = document.querySelector("section");

section.appendChild(para);
