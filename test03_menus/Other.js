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

function testA()
{  
  //bowlie.receiveForce(-10);
}

function testB()
{
  //bowlie.receiveForce(10);
}