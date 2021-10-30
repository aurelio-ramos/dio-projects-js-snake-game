let canvas = document.querySelector("#snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = []
snake[0] = {
  positionX: 8 * box,
  positionY: 8 * box,
}

function criarBackground() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
  for(let i = 0; i < snake.length; i++){
      context.fillStyle = "green";
      context.fillRect(snake[i].positionX, snake[i].positionY, box, box);
  }
}

criarBackground();
criarCobrinha();
