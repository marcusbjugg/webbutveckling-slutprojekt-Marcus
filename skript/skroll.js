document.addEventListener('DOMContentLoaded', () => {
    window.sidoSkrolla = function(riktning) {
    const sidoSkroll = document.getElementById('sidoSkroll');
    let skrollMängd = 1500;
    const windowWidth = window.innerWidth;

    if (windowWidth <= 480) {
        skrollMängd = 250;
    }

    if (riktning === 'vänster') {
        sidoSkroll.scrollBy({left: -skrollMängd, behavior: 'smooth'})
    } else {
        sidoSkroll.scrollBy({left: skrollMängd, behavior: "smooth"})
    }
}
});

document.addEventListener('DOMContentLoaded', () => {
    window.sidoSkrolla1 = function(riktning) {
    const sidoSkroll = document.getElementById('sidoSkroll1');
    let skrollMängd = 1500;
    const windowWidth = window.innerWidth;

    if (windowWidth <= 480) {
        skrollMängd = 250;
    }

    if (riktning === 'vänster') {
        sidoSkroll.scrollBy({left: -skrollMängd, behavior: 'smooth'})
    } else {
        sidoSkroll.scrollBy({left: skrollMängd, behavior: "smooth"})
    }
}
});

document.addEventListener('DOMContentLoaded', () => {
    window.sidoSkrolla2 = function(riktning) {
    const sidoSkroll = document.getElementById('sidoSkroll2');
    let skrollMängd = 1500;
    const windowWidth = window.innerWidth;

    if (windowWidth <= 480) {
        skrollMängd = 250;
    }

    if (riktning === 'vänster') {
        sidoSkroll.scrollBy({left: -skrollMängd, behavior: 'smooth'})
    } else {
        sidoSkroll.scrollBy({left: skrollMängd, behavior: "smooth"})
    }
}
});