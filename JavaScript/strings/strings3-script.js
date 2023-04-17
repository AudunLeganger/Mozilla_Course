const quote = "I dO nOT lIke gREen eGgS anD HAM";
const lowerQuote = quote.toLowerCase();
let fixedQuote = lowerQuote.charAt(0).toUpperCase() + lowerQuote.slice(1);
fixedQuote = fixedQuote.replace("green eggs and ham", "broccoli and corn");
const finalQuote = `${fixedQuote}.`;
// Add your code here

// Don't edit the code below here!

const section = document.querySelector("section");

const para1 = document.createElement("p");
para1.textContent = fixedQuote;
const para2 = document.createElement("p");
para2.textContent = finalQuote;

section.appendChild(para1);
section.appendChild(para2);
