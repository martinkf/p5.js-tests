//global variables
var elements = [];
var internalClock = 0;

	// setup p5 method
function setup()
{
  // general setup
  createCanvas(480, 640);
  frameRate(20);   

  // inclusão dos elementos
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
      "testA"
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
      "testA"
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
      "testA"
    )
  );

  elements.push(new Player(20,40));  

  elements.push(new FrameCounter(400,100,1,60));
}

// draw p5 method
function draw()
{
  // general setup
  background(128);

  // tick the internal clock
  if (internalClock < 180) internalClock++;
  else internalClock = 1;

  // draw the elements
  for (var i =  elements.length - 1; i >= 0; i--) 
  {
    elements[i].update();
    elements[i].show();
  }

  // debug: draw the internal clock
  text(internalClock, 300, 100);
}

// handling actions
function mousePressed()
{
  for (var i =  elements.length - 1; i >= 0; i--) 
  {    
    if (elements[i].type == "Button")
    {
      if (elements[i].mouseover)
      {      
        elements[i].clicked = true;
      }
    }
  }
}

// personal general methods
function testA()
{
  console.log("oi");
}