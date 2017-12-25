'use strict';
const playerWrapper = document.getElementsByClassName('mediaplayer')[0];
const player = playerWrapper.getElementsByTagName('audio')[0];
const playerButtons = document.getElementsByClassName('buttons')[0];
const playButton = playerButtons.getElementsByClassName('playstate')[0];
const prevButton = playerButtons.getElementsByClassName('back')[0];
const nextButton = playerButtons.getElementsByClassName('next')[0];
const stopButton = playerButtons.getElementsByClassName('stop')[0];
let playerTitle = playerWrapper.getElementsByClassName('title')[0];

const PLAYLIST = ['LA Chill Tour', 'LA Fusion Jam', 'This is it band'];
let track = 0;

let setTrack = () => {
  player.src = `./mp3/${PLAYLIST[track]}.mp3`
  playerTitle.title = PLAYLIST[track];
  if (playerWrapper.classList.contains('play'))
    player.play();
}

let playerPause = () => {
  playerWrapper.classList.toggle('play');
  if (playerWrapper.classList.contains('play'))
    player.play();
  else
    player.pause();
}

playButton.onclick = () => {
  playerPause();
}

stopButton.onclick = () => {
  playerPause();
  player.currentTime = 0;
}

nextButton.onclick = () => {
  if (track < PLAYLIST.length - 1) {
    track++;
    setTrack();
  } else {
    track = 0;
    setTrack();
  }
}

prevButton.onclick = () => {
  if (track > 0) {
    track--;
    setTrack();
  } else {
    track = PLAYLIST.length - 1;
    setTrack();
  }
}