
const card = document.querySelectorAll(".card");

function flipCard(event) {
     
    if (this.style.transform == "rotateY(180deg)") 
      {
        this.style.transform = "rotateY(0deg)";
        } 
    else {
       this.style.transform = "rotateY(180deg)";
        }
    }
function bigCard(event){
    this.style.transform = "scale(1.05)";
}
function smallCard(event){
    this.style.transform = "scale(1)";
}
   
for (var i = 0; i < 3; i++) {
    card[i].addEventListener('click', flipCard);
    card[i].addEventListener('mouseover', bigCard);
    card[i].addEventListener('mouseleave',smallCard);
  }


 
