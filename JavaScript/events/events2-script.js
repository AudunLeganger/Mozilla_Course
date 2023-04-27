const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, size) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
let size = 30;

drawCircle(x, y, size);

// Add your code here
document.addEventListener("keypress", (e) => {
  console.log("EVENT LISTENER! Key: " + e.code);
  if (
    e.code === "KeyW" ||
    e.code === "KeyA" ||
    e.code === "KeyS" ||
    e.code === "KeyD" ||
    e.code === "Minus" ||
    e.code === "Slash"
  ) {
    switch (e.code) {
      case "KeyW":
        y -= 25;
        break;
      case "KeyA":
        x -= 25;
        break;
      case "KeyS":
        y += 25;
        break;
      case "KeyD":
        x += 25;
        break;
      case "Minus":
        size += 10;
        break;
      case "Slash":
        size -= 10;
        size <= 0 ? (size = 1) : size;
        break;
      default:
        break;
    }
    drawCircle(x, y, size);
  }
});
