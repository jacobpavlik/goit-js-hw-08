// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

galleryItems.forEach(img => {
  const imageTemplate = `
  <a class="gallery__item" href="${img.original}">
  <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
  </a>
  `;
  const ul = document.body.querySelector('.gallery');
  ul.insertAdjacentHTML('beforeend', imageTemplate);
});
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
function selectImage() {
  lightbox.on();
}

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', selectImage);
