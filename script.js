const search = document.getElementById("search");
const buttons = document.querySelectorAll(".filter-btn");
const images = document.querySelectorAll(".image-container");

let currentCategory = "all";

function filterImages() {
  const keyword = search.value.toLowerCase();

  images.forEach((image) => {
    const category = image.dataset.category;
    const title = image.dataset.title.toLowerCase();

    const matchCategory =
      currentCategory === "all" || category === currentCategory;

    const matchSearch = title.includes(keyword);

    if (matchCategory && matchSearch) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}

search.addEventListener("input", filterImages);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");

    currentCategory = button.dataset.category;

    filterImages();
  });
});

filterImages();

const modal = document.querySelector(".modal");
const fullImage = document.querySelector(".full-image");
const caption = document.querySelector(".caption");

images.forEach((image) => {
  image.querySelector("img").addEventListener("click", () => {
    fullImage.src = image.querySelector("img").src;
    caption.textContent = image.dataset.title;

    modal.classList.add("show");
  });
});

modal.addEventListener("click", () => {
  modal.classList.remove("show");
});
