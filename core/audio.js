core.music = {};

core.music.playSound = function(filename){
  var url = './sounds/' + filename;
  gameState.sound = new Audio(url);
  gameState.sound.play();
}

core.music.playMusic = function(filename, callback){
  var url = './music/' + filename;
  gameState.music = new Audio(url);
  gameState.music.play();
  gameState.music.addEventListener("ended", function(){
     gameState.music.pause();
     callback();
  });
}
