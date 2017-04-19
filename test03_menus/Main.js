var elements = [];
var frameRateCounter = 1;

function setup()
{   
  createCanvas(480, 640);
  frameRate(60);    

  elements.push(new Button
    (
      "buttonA", 
      4,
      height / 2 - 8, 
      width / 2 - 8, 
      height / 4, 
      "Botão A", 
      "testA"
    )
  );  
  elements.push(new Button
    (
      "buttonB",
      width / 2,
      height / 2 - 8, 
      width / 2 - 8,
      height / 4, 
      "Botão B", 
      "testB"
    )
  );
  elements.push(new Button
    (
      "buttonC",
      4,
      height / 2 + height / 4 - 4, 
      width / 2 - 8,
      height / 4, 
      "Botão C", 
      "testC"
    )
  );
  elements.push(new Button
    (
      "buttonD",
      width / 2,
      height / 2 + height / 4 - 4, 
      width / 2 - 8,
      height / 4, 
      "Botão D", 
      "testD"
    )
  );


  elements.push(new Textbox
    (
      "textboxA",
      100,
      100,
      16,
      1,
      60
    )
  );
  elements.push(new Textbox
    (
      "textboxB",
      200,
      100,
      32,
      100,
      0
    )
  );
  elements.push(new Textbox
    (
      "textboxC",
      270,
      100,
      32,
      100,
      0
    )
  );
}

function draw()
{  
  background(128);

  //frameRateCounter++;

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

function Textbox(input_name, input_x, input_y, input_size, input_refresh, input_reset)
{
  this.nam = input_name;
  this.pos = createVector(input_x, input_y);
  this.siz = input_size;
  this.refresh = input_refresh;
  this.reset = input_reset;

  this.txt = 1;
  //this.txt = frameRateCounter;

  this.update = function()
  {    
    if (frameCount % this.refresh == 0)
    {   
      this.txt++;
    }

    if (input_reset != 0)
    {
      if (this.txt > input_reset)
      {
        this.txt = 1;
      }
    }
    //this.txt = frameRateCounter;
  }

  this.show = function()
  {    
    textSize(this.siz);
    fill(255);    
    text(this.txt, this.pos.x, this.pos.y);
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