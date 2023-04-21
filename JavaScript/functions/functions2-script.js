const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = "blue";

// Add your code here
function draw(x, y, width, height, color) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}
draw(5, 5, 100, 200, "blue");
draw(110, 15, 300, 50, "red");

// Don't edit the code below here!

const section = document.querySelector("section");
