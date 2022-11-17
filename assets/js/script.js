let navmenu = document.querySelector('.navMenu');
let navbar = document.querySelector('.navbar');
let imagem = document.querySelectorAll('.imagem');
let wpp = document.querySelector('.wappFull');

for (let i = 0; i <= imagem.length; i++) {
    imagem[i].onclick = function zoomImage() {

        if(wpp.style.display == 'block') {
            wpp.style.display = 'none'
        } else {
            wpp.style.display = 'block'
        }
    }
}

function normalImage() {
    if(wpp.style.display == 'block') {
        wpp.style.display = 'none'
    } else {
        wpp.style.display = 'block'
    }
}

function showNavBar() {
    if(navmenu.style.display == 'none') {
        navmenu.style.display = 'flex'
    } else {
        navmenu.style.display = 'none'
    }
}