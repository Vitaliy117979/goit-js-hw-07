import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
console.log(SimpleLightbox)

const markup = galleryItems
  .map(
    (items) =>
      `<li class="gallery__items">
      <a class="gallery__item" href="${items.original}">
      <img class="gallery__image" src="${items.preview}" alt="${items.description}" />
    </a>
  </li>`
  )
  .join("");
  
galleryList.innerHTML = markup;
new SimpleLightbox('.gallery a', { captionsData: "alt", captionPosition: 'bottom', captionDelay: 250 });
