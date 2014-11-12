(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function(pos, dir, game){
    vel = [dir[0]*14, dir[1]*14];
    Asteroids.MovingObject.call(this, pos, vel, Bullet.RADIUS, Bullet.COLOR, game);
  }
  Bullet.RADIUS = 2;
  Bullet.COLOR = "black";
  Asteroids.Util.inherits(Asteroids.MovingObject,Bullet);

})();
