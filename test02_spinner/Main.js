function setup()
{
  createCanvas(400, 400);
  frameRate(60);

  objects = [];

  spinner1 = new Spinner(100, 100, 0, 1, "clockwise", "cyan");
  objects.push(spinner1);
  spinner2 = new Spinner(300, 100, 0, 2, "counterClockwise", "black");
  objects.push(spinner2);
  spinner3 = new Spinner(100, 300, 90, 6, "clockwise", "red");
  objects.push(spinner3);
  oscillator1 = new Oscillator(300, 300, 0, 4, "counterClockwise", "cyan");
  objects.push(oscillator1);
  marble1 = new Marble(200, 100, "red");
  objects.push(marble1);
}

function draw()
{  
  background(204);

  marble1.update();

  for (var i = objects.length - 1; i >= 0; i--)
  {
    objects[i].show();
  }
}

function Spinner(input_x, input_y, input_rotationAngle, input_speed, input_orientation, input_colour)
{
  this.x = input_x;
  this.y = input_y;
  this.rotationAngle = input_rotationAngle;
  this.speed = input_speed;
  this.orientation = input_orientation;
  this.colour = input_colour;

  this.show = function()
  {
    if (this.orientation == "clockwise")
    {
      if (this.rotationAngle < 359)
      {
        this.rotationAngle += this.speed;
      }
      else
      {
        this.rotationAngle = 0;        
      }
    }
    else
    { //meaning "counterClockwise"
      if (this.rotationAngle > 0)
      {
        this.rotationAngle -= this.speed;
      }
      else
      {
        this.rotationAngle = 360;
      }
    }

    if (this.colour == "black")
    {
      fill(0);
    }
    else if (this.colour == "cyan")
    {
      fill(0, 255, 255);
    }
    else
    { //meaning "red"
      fill(255, 0, 0);
    }

    push();

    translate(this.x, this.y);
    rotate(radians(this.rotationAngle));
        
    noStroke();
    rectMode(CENTER);
    rect(0, 0, 60, 10);

    pop();
  }
}

// ARRUMAR O FATO DE QUE ELE PASSA DO 180 GRAUS SE TIVER INDO COM VELOCIDADE SUFICIENTE
function Oscillator(input_x, input_y, input_rotationAngle, input_speed, input_orientation, input_colour)
{
  this.x = input_x;
  this.y = input_y;
  this.rotationAngle = input_rotationAngle;
  this.speed = input_speed;
  this.orientation = input_orientation;
  this.colour = input_colour;

  this.show = function()
  {
    if (this.orientation == "clockwise")
    {
      if (this.rotationAngle + this.speed > 179) 
      {
        this.rotationAngle = 179;
        this.orientation = "counterClockwise";
      }
      else if (this.rotationAngle < 179)
      {
        this.rotationAngle += this.speed;        
      }
      else
      {
        this.orientation = "counterClockwise";
      }
    }
    else
    { //meaning "counterClockwise"
      if (this.rotationAngle - this.speed < 0)
      {
        this.rotationAngle = 0;
        this.orientation = "clockwise";
      }
      else if (this.rotationAngle > 0)
      {
        this.rotationAngle -= this.speed;        
      }
      else
      {
        this.orientation = "clockwise";
      }
    }

    if (this.colour == "black")
    {
      fill(0);
    }
    else if (this.colour == "cyan")
    {
      fill(0, 255, 255);
    }
    else
    { //meaning "red"
      fill(255, 0, 0);
    }

    push();

    translate(this.x, this.y);
    rotate(radians(this.rotationAngle));
        
    noStroke();
    rectMode(CENTER);
    rect(0, 0, 60, 10);

    pop();
  }
}

function Marble(input_x, input_y, input_colour)
{
  this.x = input_x;
  this.y = input_y;
  this.colour = input_colour;
  this.speed = 60/1800;

  this.update = function()
  {
    this.y += this.speed;
    this.speed += 60/1800;
  }

  this.show = function()
  {
    if (this.colour == "black")
    {
      fill(0);
    }
    else if (this.colour == "cyan")
    {
      fill(0, 255, 255);
    }
    else
    { //meaning "red"
      fill(255, 0, 0);
    }

    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x, this.y, 10);
  }
}