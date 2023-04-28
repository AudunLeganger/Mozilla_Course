const section = document.querySelector("section");
let para1 = document.createElement("p");
let para2 = document.createElement("p");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL)
  .then((response) => response.text())
  .then((text) => displayCatInfo(text));

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // Add your code here
  const catObjs = JSON.parse(catString);
  for (let i = 0; i <= catObjs.length - 2; i++) {
    motherInfo += `${catObjs[i].name}, `;
  }
  motherInfo += `and ${catObjs[catObjs.length - 1].name}.`;

  for (const catObj of catObjs) {
    for (const kittenObj of catObj.kittens) {
      total++;
      if (kittenObj.gender === "m") {
        male++;
      }
    }
  }
  kittenInfo = `Number of kittens: ${total}. Gender distribution: ${male} male, ${
    total - male
  } female.`;
  // Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
