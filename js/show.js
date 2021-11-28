const imgPop = document.querySelector(".imgPop");
const imgPopStage = document.querySelector("#imgPop--stage");
const imgPopBtn = document.querySelector(".imgPop--btn");
const chosenImg = document.querySelector("#chosenImg");

function showImage(event){
    // nav.classList.add("open-show");
    imgPopStage.classList.add("pop");
    // navBtn.classList.remove("hide-btn");
    chosenImg.innerHTML = '<img id="show-img" src="../img/cat_meme.png">';
}
function hideImage(){
    // nav.classList.remove("open-show");
    imgPopStage.classList.remove("pop");
    // navBtn.classList.add("hide-btn");
    chosenImg.innerHTML = '';
}


if(moving === true){//1. filling의 데이터 유형과 true의 데이터 유형이 같고 value가 같으면 다음을 리턴하라.
    //2. 같으면 filling 은 false가 되고 mode는 Fill이 된다 (현재 paint 상태)
    moving = false;
   mode.innerHTML = "<i class='fas fa-pencil-alt'></i>";
 }
 else{ //2.filling !== true 라면(false 상태), filling 은 true로 바뀌고 버튼은 paint로 바뀜(fill 상태)
   moving = true;//filling이 true면 paint
     mode.innerHTML = '<i class="far fa-hand-paper"></i>';
    }
    
imgPopBtn.addEventListener("mouseenter",showImage);
imgPopBtn.addEventListener("mouseleave",hideImage);
