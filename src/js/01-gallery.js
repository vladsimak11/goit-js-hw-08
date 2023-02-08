import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

// Add images to gallery

function addImgToGallery(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
      <a class="gallery__item" href="${original}">
        <img 
        class="gallery__image" 
        src="${preview}" 
        alt="${description}" 
        />
      </a>
    `;
  }).join('');
}

const cardsGallery = addImgToGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsGallery);

let lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
