let canvas = document.querySelector("#snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  positionX: 8 * box,
  positionY: 8 * box,
};

let direction = "right";

function criarBackground() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
  for (let i = 0; i < snake.length; i++) {
    context.fillStyle = "green";
    context.fillRect(snake[i].positionX, snake[i].positionY, box, box);
  }
}

function iniciarJogo() {
  criarBackground();
  criarCobrinha();
  let snakeX = snake[0].positionX;
  let snakeY = snake[0].positionY;

  if (direction == "right") {
    snakeX += box;
  } else if (direction == "left") {
    snakeX -= box;
  } else if (direction == "up") {
    snakeY -= box;
  } else if (direction == "down") {
    snakeY += box;
  }

  snake.pop();

  let newHead = {
    positionX: snakeX,
    positionY: snakeY
  }

  snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);
