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
    let container = document.querySelector('#slide-in');
    let button = document.querySelector('#menubutton');

    if (shown) {
        fadeOut(button, 200);
        container.classList.toggle('hidden');
        setTimeout(function () {
            container.classList.toggle('show');
            button.style.display = "none";
        }, 5);
        shown = false;
    } else {
        fadeIn(button, 200);
        container.classList.toggle('show');
        container.addEventListener('transitionend', function(e) {
            container.classList.toggle('hidden');
            button.style.display = "block";
        }, {
            capture: false,
            once: true,
            passive: false
        });
        shown = true;
    }
}

let xDown = null, yDown = null, xUp = null, yUp = null;
document.addEventListener('touchstart', touchstart, false);
document.addEventListener('touchmove', touchmove, false);
document.addEventListener('touchend', touchend, false);
function touchstart(evt) { const firstTouch = (evt.touches || evt.originalEvent.touches)[0]; xDown = firstTouch.clientX; yDown = firstTouch.clientY; }
function touchmove(evt) { if (!xDown || !yDown ) return; xUp = evt.touches[0].clientX; yUp = evt.touches[0].clientY; }
function touchend(evt) {
    const xDiff = xUp - xDown, yDiff = yUp - yDown;
    if ((Math.abs(xDiff) > Math.abs(yDiff)) && (Math.abs(xDiff) > 0.33 * document.body.clientWidth)) {
        if (xDiff < 0) {
            if (!shown) {
                slide();
            }
        } else {
            if (shown) {
                slide();
            }
        }
    }
    xDown = null, yDown = null;
}