'use strict';

const sidebar = document.getElementsByTagName('nav')[0];

let sidebarVisible = function (char) {
  if (!(char.ctrlKey || char.altKey))
    return;
  if (char.code == 'KeyT')
    sidebar.classList.toggle('visible');
}

document.addEventListener('keydown', sidebarVisible);

const egg = document.getElementsByClassName('secret')[0];

let charCount = -1;
let secretPhraze = [];

let easterEgg = function (char) {
  const secretKeys = ['KeyY', 'KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];
  charCount++;
  if (secretKeys[charCount] === char.code) {
    secretPhraze.push(char.code);
  } else {
    charCount = -1;
    secretPhraze = [];
  }
  if (secretKeys.length === secretPhraze.length) {
    egg.classList.toggle('visible');
    charCount = -1;
    secretPhraze = [];
  }
}

document.addEventListener('keydown', easterEgg);