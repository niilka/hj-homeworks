'use strict';

const bigImage = document.getElementById('view');
const navigation = document.getElementById('nav');
let links = Array.from(navigation.getElementsByTagName('a'));

let setImage = (image) => {
  image.preventDefault();
  links.forEach((link) => {
    link.classList.remove('gallery-current');
  });
  image.currentTarget.classList.add('gallery-current');
  bigImage.src = image.currentTarget.href;
}

links.forEach((link) => {
  link.addEventListener('click', setImage);
})