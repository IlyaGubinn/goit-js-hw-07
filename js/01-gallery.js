import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryRef = document.querySelector('.gallery');
const cardPicctures = creetePicturesCard(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', cardPicctures)


function creetePicturesCard(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
         return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`
    }).join("");
}

galleryRef.addEventListener('click', onImageClick)

function onImageClick(event) {
    event.preventDefault();

    if(event.target.nodeName !== "IMG") {
    return;
    }

    const imgSource = event.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${imgSource}" width="800" height="600">`)

    instance.show()
}




console.log(galleryItems);
