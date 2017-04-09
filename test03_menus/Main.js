var elements = [];
var testString;
var bowlie;

function setup()
{   
  createCanvas(480, 640);
  frameRate(60);    

  elements.push(new Button
    (
      "buttonA", 
      4, 
      height - (height / 6) - 4, 
      (width / 2) - 8, 
      height / 6, 
      "Botão A", 
      "testA"
    )
  );  
  elements.push(new Button
    (
      "buttonB",
      width / 2 + 4, 
      height - (height / 6) - 4, 
      (width / 2) - 8, 
      height / 6, 
      "Botão B", 
      "testB"
    )
  );
  bowlie = new Ball(width/2, height/2, 50);
  elements.push(bowlie);
}

function draw()
{  
  background(128);

  for (var i =  elements.length - 1; i >= 0; i--) 
  {
    elements[i].update();
    elements[i].show();
  }
}

function Button(input_name, input_x, input_y, input_length, input_height, input_text, input_clickFunction)
{
  this.nam = input_name;
  this.pos = createVector(input_x, input_y);
  this.l = input_length;
  this.h = input_height;
  this.txt = input_text;
  this.mouseover = false;
  this.clicked = false;
  this.clickFunctionString = "return "+input_clickFunction+"(this)";

  this.update = function()
  {
    if (mouseX > this.pos.x && mouseX < this.pos.x + this.l && mouseY > this.pos.y && mouseY < this.pos.y + this.h)
    {
      var anyElementSelected = 0;
      for (var i = elements.length - 1; i >= 0; i--) 
      {
        if ( elements[i].mouseover ) 
        {
          anyElementSelected++;
        }
      }
      if (anyElementSelected < 1)
      {
        this.mouseover = true;
      }
    }      
    else 
    {
      this.mouseover = false;
    }

    if (this.clicked)
    {
      testString = this.txt;
      var tmpFunc = new Function(this.clickFunctionString);
      tmpFunc();
      this.clicked = false;
    }
  }

  this.show = function()
  {
    if (this.mouseover)
    {
      fill(204);
    }
    else
    {
      fill(255);
    }
    rect(this.pos.x, this.pos.y, this.l, this.h);
    textSize(32);
    fill(0);    
    text(this.txt, this.pos.x + 20, this.pos.y + this.h/1.7);      
  }
}

function Ball(input_x, input_y, input_radius)
{
  this.x = input_x;
  this.y = input_y;
  this.r = input_radius;
  this.force = 0;

  this.receiveForce = function(input_force)
  {
    this.force = input_force;
  }

  this.update = function()
  {
    if (this.force > 0)
    {
      if (this.force != 0)
      {
        this.x += 4;
        this.force--;
      }
    }
    else //meaning: this.force < 0
    {
      if (this.force != 0)
      {
        this.x -= 4;
        this.force++;
      }
    }    
  }

  this.show = function()
  {
    fill(255);  
    ellipse(this.x,this.y,this.r);
  }
}

function mousePressed()
{
  for (var i =  elements.length - 1; i >= 0; i--) 
  {
    if (elements[i].mouseover)
    {      
      elements[i].clicked = true;
    }
  }
}

function testA()
{  
  bowlie.receiveForce(-10);
}

function testB()
{
  bowlie.receiveForce(10);
}