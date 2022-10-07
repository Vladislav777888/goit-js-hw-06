const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector(".gallery");
const imgRef = images
  .map(
    ({ url, alt }) =>
      `<li><img class='gallery__img' src='${url}' alt='${alt}'></li>`
  )
  .join("");

galleryRef.insertAdjacentHTML("beforeend", imgRef);

galleryRef.style.display = "flex";
galleryRef.style.flexWrap = "wrap";
galleryRef.style.gap = "10px";

const galleryImgRef = document.querySelectorAll(".gallery__img");
galleryImgRef.forEach((img) => {
  img.style.display = "block";
  img.style.width = "200px";
  img.style.height = "200px";
});
