function FrameCounter(input_x, input_y, input_refresh, input_reset)
{
  this.pos = createVector(input_x, input_y);
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
    textSize(16);
    fill(255);    
    text(this.txt, this.pos.x, this.pos.y);
  }
}