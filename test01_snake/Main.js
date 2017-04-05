function setup() {
  createCanvas(200, 200);
  frameRate(2);

  snake = new Snake();
  food = new Food();
}

function draw() {  
  background(51);

  food.show();

  snake.update();
  snake.show();

  // checks self-harm
  //
  // not working
  //var nextPoint = createVector(snake.x, snake.y);
  //if (snake.checkHarm(nextPoint)) {
  //  console.log('DIEDDDD');
  //}

  // checks food
  if (snake.checkFood(food)) {
    food = new Food();
  }

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (!(snake.xspeed == 0 && snake.yspeed == 10)) {
      snake.xspeed = 0;
      snake.yspeed = -10;
    }    
  } else if (keyCode === DOWN_ARROW) {
    if (!(snake.xspeed == 0 && snake.yspeed == -10)) {
      snake.xspeed = 0;
      snake.yspeed = 10;
    }
  } else if (keyCode === LEFT_ARROW) {
    if (!(snake.xspeed == 10 && snake.yspeed == 0)) {
      snake.xspeed = -10;
      snake.yspeed = 0;
    }
  } else if (keyCode === RIGHT_ARROW) {
    if (!(snake.xspeed == -10 && snake.yspeed == 0)) {
      snake.xspeed = 10;
      snake.yspeed = 0;
    }
  }
}