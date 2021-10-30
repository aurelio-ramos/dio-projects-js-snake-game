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

document.addEventListener("keydown", update);

function update(event) {
  if (event.keyCode == 37 && direction != "right") {
    direction = "left";
  } else if (event.keyCode == 38 && direction != "down") {
    direction = "up";
  } else if (event.keyCode == 39 && direction != "left") {
    direction = "right";
  } else if (event.keyCode == 40 && direction != "up") {
    direction = "down";
  }
}

function iniciarJogo() {
  if (snake[0].positionX > 15 * box && direction == "right") {
    snake[0].positionX = 0;
  } else if (snake[0].positionX < 0 && direction == "left") {
    snake[0].positionX = 16 * box;
  } else if (snake[0].positionY > 15 * box && direction == "down") {
    snake[0].positionY = 0;
  } else if (snake[0].positionY < 0 && direction == "up") {
    snake[0].positionY = 16 * box;
  }

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
    positionY: snakeY,
  };

  snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);
