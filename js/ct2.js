// Column 2 Tab functionality

const lbtabs = document.querySelectorAll('[data-lbtab-target]')
const lbtabContents = document.querySelectorAll('[data-lbtab-content]')


lbtabs.forEach(lbtab => {
  lbtab.addEventListener('click', () => {
    const lbtarget = document.querySelector(lbtab.dataset.lbtabTarget)
    lbtabContents.forEach(tabContent => {
      tabContent.classList.remove('lb-active')
    })
    lbtabs.forEach(lbtab => {
      lbtab.classList.remove('lb-active')
    })
    lbtab.classList.add('lb-active')
    lbtarget.classList.add('lb-active')
  })
})



// Event5 section or Data boxes js below -----------------------------------------------------------------

// Variables ------
const dataArrow = document.getElementsByClassName('data-arrow');
const dataBoxB = document.getElementsByClassName('data-box-b');


// Functions ------
const dataSlide = (i) => {
  dataArrow[i].classList.toggle('sbi-arrow');
  dataBoxB[i].classList.toggle('sb-none');
}


// Eventlisteners ------
for (let i = 0 ; i < dataArrow.length; i++) {
  dataArrow[i].addEventListener('click' , ()=> dataSlide(i) ); 
}



// Switching CT2 section or column tab 2 js below --------------------------------------

const ct2Tabs = document.getElementsByClassName('lb-tab');
const ct1 = document.getElementById('ct1');
const ct2 = document.getElementById('ct2');
const gameView = document.getElementById('game-view');



function ct1Switch(i){
  if(ct2Tabs[i].id == 'lb-event-a'){
    ct1.style.display = 'block';
    gameView.style.display = 'block';
    ct2.style.flexBasis = '60vw';
  }else{
    ct1.style.display = 'none';
    gameView.style.display = 'none';
    ct2.style.flexBasis = '76vw';
  }
}


for (let i = 0 ; i < ct2Tabs.length; i++) {
  ct2Tabs[i].addEventListener('click' , ()=> ct1Switch(i) ); 
}



// Overview Favourites js below --------------------------------------


const ovFavTop = document.getElementById('ov-favor-inner');
const ovFavBot = document.getElementById('ov-favor-sub');
const ovFavArrow = document.getElementById('ov-fav-arrow');


const ovFavSlide = () => {
  ovFavBot.classList.toggle('sb-none');
  ovFavArrow.classList.toggle('ov-flip');
}

ovFavTop.addEventListener('click', ovFavSlide);



// Overview Sports List js below --------------------------------------


const ovSportInner = document.getElementsByClassName('ov-sport-inner');
const ovSportArrow = document.getElementsByClassName('ov-sport-arrow');
const ovSportSub = document.getElementsByClassName('ov-sport-sub');


const ovSportSlide = (i) => {
  ovSportArrow[i].classList.toggle('ov-flip');
  ovSportSub[i].classList.toggle('sb-none');

  const theCSSprop = window.getComputedStyle(ovSportInner[i], null).getPropertyValue("border-left-color");
    
    if(ovSportSub[i].classList.contains('sb-none')){
        ovSportInner[i].style.backgroundColor = '';
    }else{
        ovSportInner[i].style.backgroundColor = theCSSprop;

    }
}



for (let i = 0 ; i < ovSportInner.length; i++) {
  ovSportInner[i].addEventListener('click' , ()=> ovSportSlide(i) ); 
}


// Overview Sub Sports List js below --------------------------------------


const ovSbInner = document.getElementsByClassName('ov-sb-inner');
const ovSbArrow = document.getElementsByClassName('ov-sb-arrow');
const ovSbSub = document.getElementsByClassName('ov-sb-sport');


const ovSbSlide = (i) => {
  ovSbArrow[i].classList.toggle('ov-flip');
  ovSbSub[i].classList.toggle('sb-none');

  console.log(ovSbSub[i]);
  
}



for (let i = 0 ; i < ovSbInner.length; i++) {
  ovSbInner[i].addEventListener('click' , ()=> ovSbSlide(i) ); 
}


// Calender Table Sports Category js below --------------------------------------

const lbCat = document.getElementById('lb-cat');
const lbCatA = document.getElementById('lb-cat-a');
const lbCatB = document.getElementById('lb-cat-b');

const lbCatShow = () => {
  lbCatB.classList.toggle('sb-none');
  
}

lbCatA.addEventListener('click', lbCatShow);

document.addEventListener('click', function(e) {
    
  if (lbCatB.contains(e.target)) {
      lbCatB.classList.toggle('sb-none');
  }else if (!lbCat.contains(e.target)) {
      lbCatB.classList.add('sb-none');
  }
});


// Calender Table All/Vid/Stat Category js below --------------------------------------

const lbCatEnd = document.getElementById('lb-cat-end');
const lbCatAEnd = document.getElementById('lb-cat-a-end');
const lbCatBEnd = document.getElementById('lb-cat-b-end');

const lbCatEndShow = () => {
  lbCatBEnd.classList.toggle('sb-none');
  
}

lbCatAEnd.addEventListener('click', lbCatEndShow);


document.addEventListener('click', function(e) {
    
  if (lbCatBEnd.contains(e.target)) {
      lbCatBEnd.classList.toggle('sb-none');
  }else if (!lbCatEnd.contains(e.target)) {
      lbCatBEnd.classList.add('sb-none');
  }
});



// Results Table Row expand js below --------------------------------------

const lbRowA = document.getElementsByClassName('lb-row-a');
const resCellArrow = document.getElementsByClassName('res-cell-arrow');
const lbRowB = document.getElementsByClassName('lb-row-b');


const rowSlide = (i) => {
  
  resCellArrow[i].classList.toggle('ov-flip');
  lbRowB[i].classList.toggle('sb-none');

}



for (let i = 0 ; i < lbRowA.length; i++) {
  lbRowA[i].addEventListener('click' , ()=> rowSlide(i) ); 
}