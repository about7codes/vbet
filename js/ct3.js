// Game Tab js below

// Variables ------
const gamePreview = document.getElementById('game-preview-b');
const gameArrow = document.getElementById('game-arrow');


// Functions ------
const gameSlide = () => {
    gamePreview.classList.toggle('sb-none');
    gameArrow.classList.toggle('sbi-arrow');
}


// Eventlisteners ------
gameArrow.addEventListener('click', gameSlide);



// Od Tab js below ******************************************************************************

// Variables ------
const odTop = document.getElementById('od-top');
const odArrow = document.getElementById('od-arrow');
const odBottom = document.getElementById('od-bottom');


// Functions ------
const odSlide = () => {
    odBottom.classList.toggle('open');
    odArrow.classList.toggle('flip');
}


// Eventlisteners ------
odTop.addEventListener('click', odSlide);