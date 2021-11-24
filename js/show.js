const button = document.querySelector("#nav-bar--show")
const chosenImg = document.getElementById("chosenImg");

function showImage(event){
    chosenImg.innerHTML = '<img id="show--img" src="../img/cat_meme.png">';
}
function hideImage(){
    chosenImg.innerHTML = '';
}


button.addEventListener("mouseover",showImage);
button.addEventListener("mouseout",hideImage);
