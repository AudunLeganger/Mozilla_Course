// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function randomRadian(min = 0, max = 2 * Math.PI) {
  return min + Math.random() * (max - min);
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
  constructor(x, y, vel, angle, color, size) {
    this.x = x;
    this.y = y;
    this.vel = vel;
    this.angle = angle;
    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    if (this.x + this.size >= width || this.x - this.size <= 0) {
      this.angle = Math.PI - this.angle;
    }

    if (this.y + this.size >= height || this.y - this.size <= 0) {
      this.angle = 2 * Math.PI - this.angle;
    }
    this.x += this.vel * Math.cos(this.angle);
    this.y += this.vel * Math.sin(this.angle);
  }

  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx ** 2 + dy ** 2);
        if (distance < this.size + ball.size) {
          const angleBetween = Math.atan(-dy / (1 + dy));
          this.angle = angleBetween - Math.PI;
          ball.angle = -this.angle;
        }
      }
    }
  }
}

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, width - size),
    random(1, 7),
    randomRadian(),
    randomRGB(),
    size
  );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}
loop();
