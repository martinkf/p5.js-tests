function Food() {
  this.x = floor(random(20)) * 10;
  this.y = floor(random(20)) * 10;

  this.show = function() {
    fill(255, 0, 0);
    noStroke();
    rect(this.x, this.y, 10, 10);
  }
}