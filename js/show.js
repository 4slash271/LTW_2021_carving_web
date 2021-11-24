// const nav = document.querySelector(".nav-bar");
const button = document.querySelector(".nav-bar--show");
const chosenImg = document.querySelector("#chosenImg");

function showImage(event){
    button.classList.add("open-show-btn");
    chosenImg.innerHTML = '<img id="show--img" src="../img/cat_meme.png">';
}
function hideImage(){
    chosenImg.innerHTML = '';
}


button.addEventListener("mouseover",showImage);
button.addEventListener("mouseout",hideImage);
