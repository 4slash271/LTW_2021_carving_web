
/*************** 글로벌 설정 *****************/
	// 현재 맨 위에 나타나는 .slide의 index
	// 맨 위에 나타날 .slide의 z-index
let galleryInner = document.querySelectorAll('.gallery__inner');
let galleryImg = document.querySelectorAll('.gallery__img');
var idx = 0	;	// 현재 맨 위에 나타나는 .slide의 index
var zIdx = 1;	// 맨 위에 나타날 .slide의 z-index
var lastIdx = galleryImg.length - 1;

galleryImg[idx].style.zIndex = zIdx++;


let btnNext = document.querySelector('.bt-next');
let btnPrev = document.querySelector('.bt-prev');


/*************** 사용자 함수 *****************/

function init(){
	galleryImg[idx].style.zIndex = zIdx++;
	interval = setInterval(onNextClick, intervalGap);
}

/*************** 이벤트 등록 *****************/
btnNext.addEventListener('click',onNext);
btnPrev.addEventListener('click',onPrev);

/*************** 이벤트 콜백 *****************/
function onPrev(){
    console.log(idx);
    idx = (idx === 0) ? lastIdx : idx - 1
	galleryImg[idx].style.zIndex = zIdx++;

    
}
function onNext(){
    idx = (idx === lastIdx) ? 0 : idx + 1
	galleryImg[idx].style.zIndex = zIdx++;

}
