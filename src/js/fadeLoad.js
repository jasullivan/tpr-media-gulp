window.onload = function () {
    setTimeout(function () {
        const fadeLoad = document.querySelector(".fadeLoad");
        fadeLoad.style.pointerEvents = 'auto';
        fadeLoad.style.opacity = 1;
    }, 50);
};