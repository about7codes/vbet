// Favourites Tab js below

// Variables ------
const favorInner = document.getElementById('favor-inner');
const favorSport = document.getElementById('favor-sport');
const favorArrow = document.getElementById('favor-arrow');


// Functions ------
const favSlide = () => {
    favorSport.classList.toggle('fs-hide');
    favorArrow.classList.toggle('fs-arrow');
    
}


// Eventlisteners ------
favorInner.addEventListener('click', favSlide);



// Sports list tab js below -----------------------------------------------------------------

const sportInner = document.getElementsByClassName('sport-inner');
const sportArrow = document.getElementsByClassName('favor-arrow');
const sbContainer = document.getElementsByClassName('sb-container');


// Functions ------
const sportSlide = (i) => {
    sbContainer[i].classList.toggle('sb-none');
    sportArrow[i].classList.toggle('sport-arrow');

    const theCSSprop = window.getComputedStyle(sportInner[i], null).getPropertyValue("border-left-color");
    
    if(sbContainer[i].classList.contains('sb-none')){
        sportInner[i].style.backgroundColor = '';
    }else{
        sportInner[i].style.backgroundColor = theCSSprop;

    }
}



// Eventlisteners ------
for (let i = 0 ; i < sportInner.length; i++) {
    sportInner[i].addEventListener('click' , ()=> sportSlide(i) ); 
}



// Sub-Sports list tab js below -----------------------------------------------------------------

// Variables ------
const sbInner = document.getElementsByClassName('sb-inner');
const sbSport = document.getElementsByClassName('sb-sport');
const sbArrow = document.getElementsByClassName('sb-arrow');



// Functions ------
const sbSlide = (i) => {
    sbSport[i].classList.toggle('sb-hide');
    sbArrow[i].classList.toggle('sub-arrow');
}


// Eventlisteners ------
for (let i = 0 ; i < sbInner.length; i++) {
    sbInner[i].addEventListener('click' , ()=> sbSlide(i) ); 
}



// Sub Sub-Sports list tab js below -----------------------------------------------------------------

// Variables ------
const sbiArrow = document.getElementsByClassName('sbi-right-b');
const sbiSport = document.getElementsByClassName('sbi-under-inner');


// Functions ------
const sbiSlide = (i) => {
    sbiArrow[i].classList.toggle('sbi-arrow');
    sbiSport[i].classList.toggle('sb-none');
}


// Eventlisteners ------
for (let i = 0 ; i < sbiArrow.length; i++) {
    sbiArrow[i].addEventListener('click' , ()=> sbiSlide(i) ); 
}



// Sports betting Page - Top Leagues Tab JS functionality

// const tlInner = document.getElementById('tl-inner');
// const tlArrow = document.getElementById('tl-arrow');
// const tlList = document.getElementById('tl-list');


// const tlListShow = () => {

//     tlArrow.classList.toggle('flip-on');
//     tlList.classList.toggle('height-off');
// }


// tlInner.addEventListener('click', tlListShow);



// // Sports betting Page - Sports List Tab JS functionality

// const gamesItemA = document.getElementsByClassName('games-item-a');
// const gibArrow = document.getElementsByClassName('gi-b-arrow');
// const gamesItemB = document.getElementsByClassName('games-item-b');


// const gamesItemShow = i => {

//     gibArrow[i].classList.toggle('flip-on');
//     gamesItemB[i].classList.toggle('disp-on');

//     const theCSSprop = window.getComputedStyle(gamesItemA[i], null).getPropertyValue("border-left-color");
    
//     if( !gamesItemB[i].classList.contains('disp-on')){
//         gamesItemA[i].style.backgroundColor = '';
//     }else{
//         gamesItemA[i].style.backgroundColor = theCSSprop;

//     }
// }



// for(let i = 0; i < gamesItemA.length; i++){
//     gamesItemA[i].addEventListener('click', ()=> gamesItemShow(i));
// }


// // Sports betting Page - Sub-Sports List Tab JS functionality

// const subGamesItemA = document.getElementsByClassName('sub-games-item-a');
// const sgibArrow = document.getElementsByClassName('sgi-b-arrow');
// const subGamesItemB = document.getElementsByClassName('sub-games-item-b');

// console.log(subGamesItemA);

// const subGamesItemShow = i => {

//     sgibArrow[i].classList.toggle('flip-on');
//     subGamesItemB[i].classList.toggle('disp-on');


// }



// for(let i = 0; i < subGamesItemA.length; i++){
//     subGamesItemA[i].addEventListener('click', ()=> subGamesItemShow(i));
// }

