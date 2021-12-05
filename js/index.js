

const imagineAnimal= document.querySelector("#def--imagineAnimal");
const guideAnimal=document.querySelector(".guide--imagineAnimal");

function popAnimal(event){
    guideAnimal.innerHTML =  '<span>상상의 동물</span><img src="../src/img/unicorn.jpeg" alt="유니콘" style="display:flex; width:100%";><span style="font-size:0.1em;line-height:2.5px">페가수스(그리스어: Πήγασος Pégasos[*], 라틴어: Pegasus 영어: [ˈpɛɡəsəs])는 그리스 신화에 나오는 동물로, 날개를 가진 말의 모습으로 그려진다. </span>';

    if (guideAnimal.style.display === "block"){
        guideAnimal.style.display = "none";
      
  } else {
    guideAnimal.style.display = "block";

  }
}
