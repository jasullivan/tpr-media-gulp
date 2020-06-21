/*******************************
// mob nav button
*******************************/
var navButton = document.querySelector(".navbar-toggler");
var hamburger = document.querySelector(".icon-hamburger");
var cross = document.querySelector(".icon-cross");

navButton.addEventListener("click", function() {
    if (hamburger.classList.contains("show")) {
        hamburger.classList.add("hide");
        hamburger.classList.remove("show");
        cross.classList.add("show");
        cross.classList.remove("hide");
    } else {
        hamburger.classList.add("show");
        hamburger.classList.remove("hide");
        cross.classList.add("hide");
        cross.classList.remove("show");
    }
});
/*******************************
// mob nav button ends
*******************************/

/*******************************
// fade in
********************************/
window.onload = function () {
    setTimeout(function () {
        //Re-enable mouse/touch events on the #next button
        document.querySelector(".fadeLoad").style.pointerEvents = 'auto';

        //Show the #.fadeLoad button
        //Since opacity style is transitioned, the opacity change will automatically trigger the transition.
        document.querySelector(".fadeLoad").style.opacity = 1;
    }, 100);
};
/*******************************
// fade in ends
********************************/




// maybe dont need these
// potentially needed for lazysizes see iamsteve blog

// var lazy = function lazy() {
//     document.addEventListener('lazyloaded', function (e) {
//         e.target.parentNode.classList.add('image-loaded');
//         e.target.parentNode.classList.remove('loading');
//     });
// }

// lazy();

// potentially needed for lazysizes see iamsteve blog

/*******************************
// carousel lazy loading - LAZYSIZES SEEMS TO WORK OK
********************************/
// $(function () {
//     return $("#tpr-carousel").on("slide.bs.carousel", function (ev) {
//         var lazy;
//         lazy = $(ev.relatedTarget).find("img[data-src]");
//         lazy.attr("src", lazy.data("src"));
//         lazy.removeAttr("data-src");
//     });
// });
/*******************************
// carousel lazy loading ends - LAZYSIZES SEEMS TO WORK OK
********************************/






