'use strict';

const piano = document.getElementsByTagName('ul')[0];
let keys = document.getElementsByTagName('li');
const soundsPack = ['first', 'second', 'third', 'fourth', 'fifth'];
let toggleMode = 'middle';

let setMode = (mode) => {
  let modes = ['lower', 'middle', 'higher'];
  modes.splice(modes.indexOf(mode), 1);
  modes.forEach((el) => {
    piano.classList.remove(el);
  });
  piano.classList.add(mode);
  toggleMode = mode;
}

document.addEventListener('keydown', (key) => {
  if (key.shiftKey)
    setMode('lower');
  if (key.altKey)
    setMode('higher');
})

document.addEventListener('keyup', (key) => {
  setMode('middle');
})

keys = Array.from(keys).forEach((key, index) => {
  key.addEventListener('click', () => {
    let selectedKey = key.getElementsByTagName('audio')[0];
    selectedKey.src = `sounds/${toggleMode}/${soundsPack[index]}.mp3`;
    selectedKey.play();
  })
})