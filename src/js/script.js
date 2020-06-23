/*******************************
// mob nav button
*******************************/
var navButton = document.querySelector(".navbar-toggler");
var hamburger = document.querySelector(".icon-hamburger");
var cross = document.querySelector(".icon-cross");

// menu/cross icon changes
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
// window.onload = function () {
//     setTimeout(function () {
//         document.querySelector(".fadeLoad").style.pointerEvents = 'auto';
//         document.querySelector(".fadeLoad").style.opacity = 1;
//     }, 500);
// };
/*******************************
// fade in ends
********************************/

/*******************************
// nav-active 
********************************/
// const pageNames = [
//     'about',
//     'projects',
//     'clients',
//     'approach',
//     'news',
//     'contact'
// ]

// const body = document.querySelector('body');
// const navLinks = document.querySelectorAll('.tpr-nav__link');
// pageNames.forEach(pageName => {
//     if(body.classList.contains(pageName)){
//         console.log('true')
//         navLinks.forEach(navLink => navLink.classList.contains(`nav-${pageName}`) && navLink.classList.add('nav-active'))
//     }
// })
/*******************************
// nav-active in ends
********************************/