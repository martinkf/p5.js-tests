function Snake() {
  this.x = floor(random(20)) * 10;
  this.y = floor(random(20)) * 10;
  this.xspeed = 10;
  this.yspeed = 0;
  this.size = 1;
  this.sizepoints = [];

  this.update = function() {
    this.x = this.x + this.xspeed;    
    this.y = this.y + this.yspeed;

    if (this.x < 0) {
      this.x = 190;
    }
    if (this.x >= width) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = 190;
    }
    if (this.y >= height) {
      this.y = 0;
    }

    var currentPoint = createVector(this.x, this.y);

    this.sizepoints.push(currentPoint);
    
    if (this.sizepoints.length > this.size) {
      this.sizepoints.shift();
    }
  } 

  // not working
  //this.checkHarm = function(nextPoint) {
  //  for (var i = this.sizepoints.length - 1; i >= 0; i--) {
  //    if (this.sizepoints[i] == nextPoint) {
  //      return true;
  //    }
  //  }
  //}

  this.checkFood = function(food) {
    var d = dist(this.x, this.y, food.x, food.y);
    if (d < 1) {
      this.size++;
      return true;
    }
  }

  this.show = function() {
    fill(255);    
    noStroke();

    //rect(this.x, this.y, 10, 10);

    for (var i = 0; i < this.sizepoints.length; i++) {
      var vectorToDraw = this.sizepoints[i];      
      rect(vectorToDraw.x, vectorToDraw.y, 10, 10);
    }
  }
}