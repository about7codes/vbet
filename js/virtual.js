
// Game gallary JS below -Glider JS    

window._ = new Glider(document.querySelector('.glider'), {

    slidesToScroll: 1,
    slidesToShow: 5.5,
    draggable: true,
    rewind: true,
    
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});


// Video Audio & Video Expand function below

const sportVideo = document.getElementById('sport-video');
const svcMute = document.getElementById('svc-mute');
const svcExp = document.getElementById('svc-exp');
const sportVideoContainer = document.getElementById('sport-vid');


const videoSonund = () => {

    svcMute.classList.toggle('off');
    sportVideo.muted ? sportVideo.muted = false : sportVideo.muted = true;
}

const videoExpand = () => {
    
    svcExp.classList.toggle('exp-sm');
    sportVideoContainer.classList.toggle('inc-width');
}

svcMute.addEventListener('click', videoSonund);
svcExp.addEventListener('click', videoExpand);


// V Box section or V boxes js below -----------------------------------------------------------------

// Variables ------
const vIconsArrow = document.getElementsByClassName('v-icons-arrow');
const vBoxB = document.getElementsByClassName('v-box-b');


// Functions ------
const vSlide = (i) => {
  vIconsArrow[i].classList.toggle('flip-arrow');
  vBoxB[i].classList.toggle('sb-none');
}


// Eventlisteners ------
for (let i = 0 ; i < vIconsArrow.length; i++) {
  vIconsArrow[i].addEventListener('click' , ()=> vSlide(i) ); 
}