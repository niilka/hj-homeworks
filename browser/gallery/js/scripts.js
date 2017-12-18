'use strict';

const gallery = document.getElementById('currentPhoto');
const nextPhoto = document.getElementById('nextPhoto');
const prevPhoto = document.getElementById('prevPhoto');

const dir = 'i/';
const photos = ['breuer-building.jpg', 'guggenheim-museum.jpg', 'headquarters.jpg', 'IAC.jpg',
  'new-museum.jpg', 'spinner.gif'
]

let iterator = 0;
const countOfPhotos = photos.length - 1;

let setImage = (imageNumber) => gallery.src = `${dir}${photos[imageNumber]}`;

nextPhoto.onclick = function () {
  iterator++;
  if (iterator > countOfPhotos)
    iterator = 0;
  setImage(iterator);
}

prevPhoto.onclick = function () {
  iterator--;
  if (iterator < 0)
    iterator = countOfPhotos;
  setImage(iterator);
}