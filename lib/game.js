(function () {
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  };

  var Game = Asteroids.game = function (){
    this.asteroids = []
  }

  Game.prototype.addAsteroids = function (){
    while (this.asteroids.length <= Game.NUM_ASTEROIDS) {
      this.asteroids.push(new Asteroids.Asteroid(this.randomPosition()))
    }
  }
  Game.prototype.render = function(){
    for (var i = 0; i< this.asteroids.length;i++){
      this.asteroids[i].draw(c)
    }

  }


  Game.prototype.randomPosition = function (){
    return [Math.random() * 500, Math.random() * 500]
  }
  g = new Game
  Game.DIM_X = 0
  Game.DIM_Y = 0
  Game.NUM_ASTEROIDS = 20
  g.addAsteroids();
  g.render();

})();


