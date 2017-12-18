'use strict';

const slider = document.getElementById('slider');
const dir = 'i/';
const photos = ['airmax-jump.png', 'airmax-on-foot.png', 'airmax-playground.png', 'airmax-top-view.png', 'airmax.png', 'spinner.gif']
const countOfImages = photos.length - 1;

let runSlider = () => {
  let iterator = 0;
  setInterval(() => {
    if (iterator < countOfImages)
      iterator++;
    else
      iterator = 1;
    slider.src = `${dir}${photos[iterator]}`
  }, 5000)
}

runSlider();