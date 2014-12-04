(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function(pos,vel,radius,color, game){
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
    this.game = game;
  }

  MovingObject.prototype.draw = function (c) {

   c.fillStyle = this.color;
   c.beginPath();
   c.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI)
   c.fill();
  }

  MovingObject.prototype.move = function(){
    if (!(this instanceof Asteroids.Bullet)){
      this.game.wrap(this.pos);
    }
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }

  MovingObject.prototype.isCollidedWith = function(otherObject){
    var distance = Math.pow(Math.pow((this.pos[0]-otherObject.pos[0]),2) + Math.pow((this.pos[1]-otherObject.pos[1]),2), 0.5);
    if (distance < this.radius + otherObject.radius){
      return true;
    }
    else{
      return false;
    }

  }

  MovingObject.prototype.collideWith = function(otherObject) {
    if (this instanceof Asteroids.Ship && otherObject instanceof Asteroids.Asteroid){
      this.relocate();
      Asteroids.game.call(this.game) //This resets the game
    }
    if (this instanceof Asteroids.Asteroid && otherObject instanceof Asteroids.Bullet){
      this.game.remove(this);
    }
    if (this instanceof Asteroids.Ship && otherObject instanceof Asteroids.Gun){
      this.game.hasGun = true;
      console.log("gun collision");
      this.game.guns = [];
    }
  }
  MovingObject.prototype.isOutOfBounds = function(){
    pos = this.pos
    if (pos[0] > this.game.dim_x() || pos[0] < 0) {
      return true;
    }
    if (pos[1] > this.game.dim_y() || pos[1] < 0) {
      return true;
    }
    return false
  }

})();
