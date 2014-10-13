(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  };

  var Game = Asteroids.game = function (){
    this.asteroidArr = [];
    this.addAsteroids();
  }

  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  Game.NUM_ASTEROIDS = 4;

  Game.prototype.addAsteroids = function (){
    while (this.asteroidArr.length < Game.NUM_ASTEROIDS) {
      this.asteroidArr.push(new Asteroids.Asteroid(this.randomPosition(),this))
    }
  }

  Game.prototype.draw = function(c){
    c.clearRect(0,0,Game.DIM_X,Game.DIM_Y);

    for (var i = 0; i< this.asteroidArr.length;i++){
      this.asteroidArr[i].draw(c);
    }

  }

  Game.prototype.randomPosition = function (){
    return [Math.random() * 500, Math.random() * 500];
  }

  Game.prototype.moveObjects = function (){
    for (var i = 0; i< this.asteroidArr.length;i++){
      this.asteroidArr[i].move();
    }
  }

  Game.prototype.wrap = function (pos) {
    if (pos[0] > Game.DIM_X) {
      pos[0] -= Game.DIM_X;
    }
    else if (pos[0] < 0){
      pos[0] += Game.DIM_X;
    }


    if (pos[1] > Game.DIM_Y) {
      pos[1] -= Game.DIM_Y;
    }
    else if (pos[1] < 0){
      pos[1] += Game.DIM_Y;
    }
  };

  Game.prototype.checkCollisions = function(){
    var colisions = [];
    for (var i=0; i < this.asteroidArr.length-1; i++){
      for (var j=i+1; j < this.asteroidArr.length; j++){
        if (this.asteroidArr[i].isCollidedWith(this.asteroidArr[j])){
          this.asteroidArr[i].collideWith(this.asteroidArr[j]);
          //colisions.push([this.asteroidArr[i],this.asteroidArr[j]]);
          console.log("colision!!!!");
        }
      }
    }
    //for (var i=0;i<colisions.length;i++)
    //{
      //colisions[i][0].collideWith([i][1]);
      //console.log("one asteroid collided with another")
      //}
  }

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function(asteroid) {
    var index = this.asteroidArr.indexOf(asteroid);

    this.asteroidArr.splice(index, 1);
  }


})();


