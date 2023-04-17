const theorem = "Pythagorean theorem";

const a = 5;
const b = 8;

let myString =
  "Using *, we can work out that that if the two shortest sides of a right-angled triangle have lengths of * and *, the length of the hypotenuse is *.";

myString = myString.replace("*", theorem);
myString = myString.replace("*", a.toString());
myString = myString.replace("*", b.toString());
myString = myString.replace(
  "*",
  Math.sqrt(a ** 2 + b ** 2)
    .toFixed(2)
    .toString()
);
// Don't edit the code below here!

const section = document.querySelector("section");

const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);
