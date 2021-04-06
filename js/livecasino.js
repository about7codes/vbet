// Game provider JS below 

const gameProArrow = document.getElementById('gamepro-top-b');
const gameProBottom = document.getElementById('gamepro-bottom');


const gamePro = () => {
    gameProBottom.classList.toggle('mo-height');
    gameProArrow.classList.toggle('flip-arrow')
}

gameProArrow.addEventListener('click', gamePro);