const button = document.querySelector("#nav-bar--show")
const chosenImg = document.getElementById("chosenImg");

function showImage(event){
    chosenImg.innerHTML = '<div>hi</div>';
}
function hideImage(){
    chosenImg.
}


button.addEventListener("mouseover",showImage);
button.addEventListener("mouseout",hideImage);
