//The front-facing api of the application; to avoid internal engine issues it is best to only use the listed functions to affect the gameState

//Setting the visible attribute like visable="gameState.planetHealth > 100" will cause the item to show if planetHealth is greater than 100
//Basically it follows the syntax viable="valid javascript expression"

document.addEventListener("DOMContentLoaded", (event) => {
  init(); //Define init() in your loader script outside of the engine
  core.dom.injectPage("app", './pages/0.html');
  core.dom.processVisible();
});

class Engine {

  //A few constants usable for affecting states
  constants = {
    MINOR: 1,
    MEDIUM: 10,
    LARGE: 20
  }

  constructor() {

  }

  //Set the title; takes a string
  setTitle = (title) => {
    core.dom.setElementTextById("title", title);
  }

  //Go next page; technically this injects the file into the page
  nextPage = () => {
    var page = gameState.currentPage;
    var nextPageId = page + 1;
    gameState.currentPage = nextPageId;
    var url = "./pages/" + nextPageId + ".html";
    core.dom.injectPage("app", url);
    core.dom.processVisible();
  }

  //Game states such as planet health; calling this will erase states that match the key. Takes an object such as {planetHealth: 100}
  setStates = (states) => {
    for (var key in states) {
      if (states.hasOwnProperty(key)) {
        gameState[key] = states[key];
      }
    }
  }

  //Play a sound effect; takes a filename
  playSound = (filename) => {
    core.music.playSound(filename);
  }

  //Play music from music folder
  playMusic = () => {
    const filename = "0.mp3";
    let counter = 0;
    const musicLoop = () => {
      counter = counter + 1;
      if (counter > gameState.musicCount + 1) {
        counter = 0;
      }
      filename = counter + ".mp3";
      core.music.playMusic(filename, musicLoop);
    }
    core.music.playMusic(filename, function () {
      counter = counter + 1;
      filename = counter + ".mp3";
      core.music.playMusic(filename, musicLoop);
    })
  }

  //Play music from music folder
  playMusic = () => {
    const filename = "0.mp3";
    let counter = 0;
    const musicLoop = () => {
      counter = counter + 1;
      if (counter > gameState.musicCount + 1) {
        counter = 0;
      }
      filename = counter + ".mp3";
      core.music.playMusic(filename, musicLoop);
    }
    core.music.playMusic(filename, function () {
      counter = counter + 1;
      filename = counter + ".mp3";
      core.music.playMusic(filename, musicLoop);
    })
  }

  setState = (state, value) => {
    gameState[state] = value;
  }

  //Reduce value of state
  reduceState = (state, value) => {
    gameState[state] = gameState[state] - value;
  }

  //Increase value of state
  increaseState = (state, value) => {
    gameState[state] = gameState[state] + value;
  }

  //Reset game to start
  reset = () => {
    gameState.currentPage = 0;
    if (gameState.sound) {
      gameState.sound.pause();
    }
    if (gameState.music) {
      gameState.music.pause();
    }
  }

}

const engine = new Engine();