function Button(input_name, input_x, input_y, input_length, input_height, input_text, input_clickFunction)
{
  this.nam = input_name;
  this.type = "Button";
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
        if (elements[i].type == "Button")
        {
          if ( elements[i].mouseover ) 
          {
            anyElementSelected++;
          }
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