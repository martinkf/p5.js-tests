function Textbox(input_name, input_x, input_y, input_txt, input_colour, input_size)
{
  this.nam = input_name;
  this.type = "Textbox";
  this.pos = createVector(input_x, input_y);
  this.txt = input_txt;
  this.colour = input_colour;
  this.siz = input_size;

  this.update = function()
  {    
    //
  }

  this.show = function()
  {    
    textSize(this.siz);
    switch (this.colour)
    {
      case "red":
        fill(255,0,0);
        break;
      case "dark_red":
        fill(192,0,0);
        break;
      case "green":
        fill(0,255,0);
        break;
      case "dark_green":
        fill(0,192,0);
        break;
      case "blue":
        fill(0,0,255);
        break;
      case "dark_blue":
        fill(0,0,192);
        break;
      case "white":
        fill(255);
        break;
      default:
        fill(255); // defaults to white
        break;
    }

    text(this.txt, this.pos.x, this.pos.y);    
  }
}