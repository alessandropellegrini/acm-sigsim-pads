let shown = true;

function fadeOut(elem, ms) {
    elem.style.opacity = 1;

    if (ms) {
        let opacity = 1;
        const timer = setInterval(function() {
            opacity -= 50 / ms;
            if (opacity <= 0) {
                clearInterval(timer);
                opacity = 0;
            }
            elem.style.opacity = opacity;
        }, 50);
    } else {
        elem.style.opacity = 0;
    }
}

// Native fadeIn
function fadeIn(elem, ms) {
    elem.style.opacity = 0;

    if (ms) {
        let opacity = 0;
        const timer = setInterval(function() {
            opacity += 50 / ms;
            if (opacity >= 1) {
                clearInterval(timer);
                opacity = 1;
            }
            elem.style.opacity = opacity;
        }, 50);
    } else {
        elem.style.opacity = 1;
    }
}

function slide() {
    document.querySelector('#slide-in').classList.toggle('show');
    let button = document.querySelector('#menubutton');

    if (shown) {
        fadeOut(button, 200);
        shown = false;
    } else {
        fadeIn(button, 200);
        shown = true;
    }
}