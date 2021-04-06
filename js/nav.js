const navmob = document.getElementById('navmob-container');
const cross = document.getElementById('cross');
const menu = document.getElementById('menu');
const body = document.getElementById('body');
const lang1 = document.getElementById('lang1');
const lang2 = document.getElementById('lang2');
const lang3 = document.getElementById('lang3');
const lang4 = document.getElementById('lang4');


navClose = () => {
    if(navmob.style.display === 'block'){
        navmob.style.display = 'none'
        navmob.style.position = 'static'
    }else{
        navmob.style.display = 'block'
        navmob.style.position = 'fixed'
    }
}

chooseLang = () => {
    if(lang2.style.display === 'block'){
        lang2.style.display = 'none'
    }else{
        lang2.style.display = 'block'

    }
}

chooseLangMob = () => {
    if(lang4.style.display === 'block'){
        lang4.style.display = 'none'
    }else{
        lang4.style.display = 'block'

    }
}

menu.addEventListener('click', navClose);
cross.addEventListener('click', navClose);
lang1.addEventListener('click', chooseLang);
lang3.addEventListener('click', chooseLangMob);


