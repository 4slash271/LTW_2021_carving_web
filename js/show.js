const nav = document.querySelector(".nav-bar");
const navBtn = document.querySelector(".nav-bar-btn");
const chosenImg = document.querySelector("#chosenImg");

function showImage(event){
    nav.classList.add("open-show");
    navBtn.classList.add("open-btn");
    navBtn.classList.remove("hide-btn");
    chosenImg.innerHTML = '<img id="show-img" src="../img/cat_meme.png">';
}
function hideImage(){
    nav.classList.remove("open-show");
    navBtn.classList.remove("open-btn");
    navBtn.classList.add("hide-btn");
    chosenImg.innerHTML = '';
}


navBtn.addEventListener("mouseover",showImage);
navBtn.addEventListener("mouseout",hideImage);
