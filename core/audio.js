core.music = {};

class CoreMusic {
  constructor() {

  }

  playSound = (filename) => {
    const url = './sounds/' + filename;
    gameState.sound = new Audio(url);
    gameState.sound.play();
  }

  playMusic = (filename) => {
    const url = './music/' + filename;
    gameState.music = new Audio(url);
    gameState.music.play();
    gameState.music.addEventListener('ended', () => {
      this.currentTime = 0;
      this.play();
    }, false);
  }

}

core.music = new CoreMusic();