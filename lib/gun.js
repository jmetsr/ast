(function(){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Gun = Asteroids.Gun = function(pos,game){
    Asteroids.MovingObject.call(this, pos, [0,0], Gun.RADIUS, Gun.COLOR, game);
  }

})()
