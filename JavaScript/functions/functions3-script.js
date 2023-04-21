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
const random = (low, high) => {
  return low + Math.floor(Math.random() * (high - low + 1));
};

const chooseName = (array, low, high) => {
  const index = random(low, high);
  return array[index];
};

para.textContent = chooseName(names, 0, names.length - 1);
// Don't edit the code below here!

const section = document.querySelector("section");

section.appendChild(para);
