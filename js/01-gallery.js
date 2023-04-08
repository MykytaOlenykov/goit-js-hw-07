import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryEl.innerHTML = createMarkupGalleryItems(galleryItems);

const linksImagesEl = galleryEl.querySelectorAll(".gallery__link");

linksImagesEl.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
  })
);

galleryEl.addEventListener("click", (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  onToggleModal(e.target.dataset.source);
});

function createMarkupGalleryItems(listItems) {
  return listItems
    .map(
      (item) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img
              class="gallery__image"
              src="${item.preview}"
              data-source="${item.original}"
              alt="${item.description}"
            />
          </a>
        </div>`
    )
    .join("");
}

function onToggleModal(link) {
  const instance = basicLightbox.create(
    `
    <img src="${link}" width="800" height="600">
`,
    {
      handler: null,

      onShow() {
        this.handler = onCloseModal.bind(instance);
        window.addEventListener("keydown", this.handler);
      },

      onClose() {
        window.removeEventListener("keydown", this.handler);
      },
    }
  );

  instance.show();
}

function onCloseModal(e) {
  if (e.code === "Escape") {
    this.close();
  }
}
