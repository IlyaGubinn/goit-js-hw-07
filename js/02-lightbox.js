import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const cardPicctures = creetePicturesCard(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', cardPicctures)


function creetePicturesCard(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
         return `<div class="gallery__item"><a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description}/>
</a></div>`
    }).join("");
}

new SimpleLightbox('.gallery__item a', { captions: true, captionsData: 'alt', captionDelay:250, });


console.log(galleryItems);
