let finalResult;

let evenOddResult;

// Add your code here
let num1 = 5;
let num2 = 19;
let num3 = 10;
let num4 = 8;

let sum_12 = num1 + num2;
let diff_34 = num3 - num4;

finalResult = sum_12 * diff_34;
evenOddResult = finalResult % 2;

// Don't edit the code below here!

const section = document.querySelector("section");

const para1 = document.createElement("p");
const finalResultCheck =
  finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`;
para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;
const para2 = document.createElement("p");
const evenOddResultCheck =
  evenOddResult === 0
    ? "The final result is even!"
    : "The final result is odd. Hrm.";
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);
