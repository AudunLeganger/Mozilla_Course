const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// Add your code here
const eaglesIndex = birds.indexOf("Eagles");
birds.splice(eaglesIndex, 1);
const eBirds = birds.filter((item) => item.startsWith("E"));
// Don't edit the code below here!

const section = document.querySelector("section");

const para1 = document.createElement("p");
para1.textContent = eBirds;

section.appendChild(para1);
