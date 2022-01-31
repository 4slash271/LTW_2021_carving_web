{/* <div class="slide_box">
<div class="slide_list">
  <div id="lastClone" class="slide_item">5</div>
  <div class="slide_item">1</div>
  <div class="slide_item">2</div>
  <div class="slide_item">3</div>
  <div class="slide_item">4</div>
  <div class="slide_item">5</div>
  <div id="firstClone" class="slide_item">1</div>
</div> */}

const galleryInner = document.querySelector(".gallery__inner");
const galleryImg = document.querySelectorAll(".gallery__img");

const prevBtn = document.querySelector(".bt-prev");
const nextBtn = document.querySelector(".bt-next");

//counter
let counter = 1;
const size = galleryImg[0].clientWidth;


galleryInner.style.transform = "translateX(" + -size * counter + "px)";
// galleryImg[0].style.position = "absoulte;"
// galleryImg[0].style.left="0";

nextBtn.addEventListener("click", () => {
    if (counter >= galleryImg.length - 1) return;
    galleryInner.style.transition = "transform 0.3s ease-in-out";
    counter++;
    galleryInner.style.transform = "translateX(" + -size * counter + "px)";
  });
  
  prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    galleryInner.style.transition = "transform 0.3s ease-in-out";
    counter--;
    galleryInner.style.transform = "translateX(" + -size * counter + "px)";
  });
  console.log(galleryImg.length);

  galleryInner.addEventListener("transitionend", function () {
    if (galleryImg[counter].id === "clnoe--last") {
        galleryInner.style.transition = "none";
      counter = galleryImg.length - 2;
      galleryInner.style.transform = "translateX(" + -size * counter + "px)";
    }
    if (galleryImg[counter].id === "clone--first") {
        galleryInner.style.transition = "none";
      counter = galleryImg.length - counter;
      galleryInner.style.transform = "translateX(" + -size * counter + "px)";
    }
  });

  counter = galleryImg.length - counter;
  galleryInner.style.transform = "translateX(" + -size * counter + "px)";

  counter = galleryImg.length - counter;

  nextBtn.addEventListener("click", () => {
    if (counter >= galleryImg.length - 1) return;
    galleryInner.style.transition = "transform 0.3s ease-in-out";
    counter++;
    galleryInner.style.transform = "translateX(" + -size * counter + "px)";
  });
  
  prevBtn.addEventListener("click", () => {
    if (counter <= 0) return;
    galleryInner.style.transition = "transform 0.3s ease-in-out";
    counter--;
    galleryInner.style.transform = "translateX(" + -size * counter + "px)";
  });
  console.log(galleryImg.length);