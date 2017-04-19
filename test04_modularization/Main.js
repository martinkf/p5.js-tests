
var elements_static = [];
var elements_dynamic = [];
var elements_buttons = [];
//var frameRateCounter = 1;

function setup()
{   
  createCanvas(480, 640);
  frameRate(60);   

  background(128);

  elements_buttons.push(new Button
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
  elements_buttons.push(new Button
    (
      "buttonB",
      width / 2,
      height / 2 - 8, 
      width / 2 - 8,
      height / 4, 
      "Botão B", 
      "testA"
    )
  );
  elements_buttons.push(new Button
    (
      "buttonC",
      4,
      height / 2 + height / 4 - 4, 
      width / 2 - 8,
      height / 4, 
      "Botão C", 
      "testA"
    )
  );
  elements_buttons.push(new Button
    (
      "buttonD",
      width / 2,
      height / 2 + height / 4 - 4, 
      width / 2 - 8,
      height / 4, 
      "Botão D", 
      "testA"
    )
  );

  elements_static.push(new Player(20,40));
  
  for (var i =  elements_static.length - 1; i >= 0; i--) 
  {    
    elements_static[i].show();
  }

  elements_dynamic.push(new FrameCounter(400,100,30,60));
}

function draw()
{  
  //background(128);

  //frameRateCounter++;
  //console.log(frameRate());

  for (var i =  elements_buttons.length - 1; i >= 0; i--) 
  {
    elements_buttons[i].update();
    elements_buttons[i].show();
  }

  for (var i = elements_dynamic.length - 1; i >= 0; i--) 
  {
    elements_dynamic[i].update();
    elements_dynamic[i].show();
  }
}

function mousePressed()
{
  for (var i =  elements_buttons.length - 1; i >= 0; i--) 
  {
    if (elements_buttons[i].mouseover)
    {      
      elements_buttons[i].clicked = true;
    }
  }
}

function testA()
{
  //console.log("oi");
}