import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (items) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${items.original}">
      <img
        class="gallery__image"
        src="${items.preview}"
        data-source="${items.original}"
        alt="${items.description}"
      />
    </a>
  </div>`
  )
  .join("");

galleryList.innerHTML = markup;

galleryList.addEventListener("click", handleOpenModal);

function handleOpenModal(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  
  const instance = basicLightbox.create(
      `<img src="${e.target.dataset.source}" width="800" height="600">`,
      {
              onShow: instance => {window.addEventListener("keydown", closeModal)},
          
              onClose: instance => {window.removeEventListener("keydown", closeModal)},
          },
          );
          function closeModal(e){
              if(e.code === "Escape"){
                  instance.close()
                }
                
            }
            instance.show();
            
        }