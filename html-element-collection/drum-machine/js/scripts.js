'use strict';

let drums = document.getElementsByClassName('drum-kit__drum');
drums = Array.from(drums);

let playDrum = (sound) => {

}
drums.forEach(element => {
  let player = element.getElementsByTagName('audio')[0];
  element.onclick = () => {
    if (player.duration > 0) {
      player.pause();
      player.currentTime = 0;
      player.play();
    }
  }
});