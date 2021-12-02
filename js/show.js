const imgPop = document.querySelector(".imgPop");
const imgPopStage = document.querySelector("#imgPop--stage");
const imgPopBtn = document.querySelector(".imgPop--btn");
const chosenImg = document.querySelector("#chosenImg");
// const canvas = document.querySelector('.canvas');
// let open = false;

function showImage(){
    
    chosenImg.innerHTML = '<img id="show-img" src="../src/img/cat_meme.png">';

    if (chosenImg.style.display === "block"){
        chosenImg.style.display = "none";
        imgPopStage.classList.remove("pop");
  } else {
      chosenImg.style.display = "block";
      imgPopStage.classList.add("pop");
    //   canvas.classList.add("")

  }
    
};
// function hideImage(){
//     // open === false;
//     if (imgPopBtn.style.display === "none") 
//     {imgPopBtn.style.display = "block";
//   } else {imgPopBtn.style.display = "none";
//   }
// }


// if(open === true){//1. filling의 데이터 유형과 true의 데이터 유형이 같고 value가 같으면 다음을 리턴하라.
//     //2. 같으면 filling 은 false가 되고 mode는 Fill이 된다 (현재 paint 상태)
//     open = false;
//     imgPopStage.classList.add("pop");
//     chosenImg.innerHTML = '<img id="show-img" src="../img/cat_meme.png">';
//  }
//  else{ //2.filling !== true 라면(false 상태), filling 은 true로 바뀌고 버튼은 paint로 바뀜(fill 상태)
//    open = true;//filling이 true면 paint
//    imgPopStage.classList.remove("pop");
//    chosenImg.innerHTML = '';

//     }

// imgPopBtn.addEventListener("mouseenter",showImage);
// imgPopBtn.addEventListener("mouseleave",hideImage);
