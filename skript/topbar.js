document.addEventListener('DOMContentLoaded', () => {
    let skrollSenast = 0
const topMenu = document.getElementById('topp-menu');
let MusNäraToppen = false

window.addEventListener('scroll', () => {
    const skrollPosition = window.pageYOffset;

    if (skrollPosition <= 0 || MusNäraToppen) {
        topMenu.classList.remove('hidden');
        return
    }

    if (skrollPosition > skrollSenast) {
        topMenu.classList.add('hidden')
    } else {
        topMenu.classList.remove('hidden')
    }
    
    if (topMenu.classList.contains('hidden')) {
        document.getElementById('collections-dropdown').classList.remove('show');
    }

    skrollSenast = skrollPosition
});

document.addEventListener('mousemove', (e) => {
    if (e.clientY < 100) {
        topMenu.classList.remove('hidden')
        MusNäraToppen = true
    } else
        MusNäraToppen = false 
    if (pageYOffset > skrollSenast) {
        topMenu.classList.add('hidden')
    }

    if (topMenu.classList.contains('hidden')) {
        document.getElementById('collections-dropdown').classList.remove('show');
    }
});

document.querySelector('.dropbtn').addEventListener('click', () => {
    document.getElementById('collections-dropdown').classList.toggle('show');
});
});

