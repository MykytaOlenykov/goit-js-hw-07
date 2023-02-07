import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

/* Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup». */
// Пришлось на див менять а то в разметке ul стоит а по шаблону должно быть
/* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>; */
// без li

document.querySelector("ul.gallery").remove();

const galleryDivEl = document.createElement("div");
galleryDivEl.classList.add("gallery");
document.querySelector("p").after(galleryDivEl);

galleryDivEl.innerHTML = createMarkupGalleryItems(galleryItems);

const linksImagesEl = galleryDivEl.querySelectorAll(".gallery__item");

linksImagesEl.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
  })
);

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createMarkupGalleryItems(listItems) {
  return listItems
    .map(
      (item) => `
        <a class="gallery__item" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
      `
    )
    .join("");
}
