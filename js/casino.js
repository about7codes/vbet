

// Game gallary JS below -Glider JS    

window._ = new Glider(document.querySelector('.glider'), {

    slidesToScroll: 1,
    slidesToShow: 1.2,
    draggable: true,
    rewind: true,
    
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    },
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 6
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1.5
            }
        }
    ]
});


// Game provider JS below 

const gameProArrow = document.getElementById('gamepro-top-b');
const gameProBottom = document.getElementById('gamepro-bottom');


const gamePro = () => {
    gameProBottom.classList.toggle('mo-height');
    gameProArrow.classList.toggle('flip-arrow')
}

gameProArrow.addEventListener('click', gamePro);