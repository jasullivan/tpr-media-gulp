/******************************* 
// CAROUSELS - homepage and testimonials
********************************/

$(document).ready(function () {
    $(".testimonialSlider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        fade: true,
        arrows: false,
        adaptiveHeight: true
    });
    
    // $(".homepageSlider").slick({
    //     dots: false,
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     fade: true,
    //     adaptiveHeight: true,
    //     cssEase: 'linear',
    //     speed: 1000,
    //     autoplaySpeed: 5000,
    //     nextArrow: '<span class="icon-arrowRight arrow-next "></span>',
    //     prevArrow: '<span class="icon-arrowLeft arrow-prev"></span>'
    // });
});




// potential hide arrows on resize

// function fadeOnResize() {
//     console.log('test');
//     const arrowRight = document.querySelector('.icon-arrowRight');
//     const arrowLeft = document.querySelector('.icon-arrowLeft');
//     arrowRight.style.opacity = 0;
//     arrowLeft.style.opacity = 0;
//     setTimeout(function () { 
//         arrowRight.style.opacity = 1;
//         arrowLeft.style.opacity = 1;
//     }, 2000);
// }

// window.onresize = fadeOnResize;















// var text = [
//     '<span>Ronan Bennett, writer, Top Boy</span><br>"tpr did a brilliant job promoting Top Boy and made a big contribution to the success it turned out to be."',

//     '<span>Neil Crombie, director, All in the Best Possible Taste According to Grayson Perry</span><br>"tpr put their all into promoting the series and got us everywhere from the Sun to Start the Week, helping make these the most talked about tapestries since Bayeux."',

//     '<span>David Pearson, Director, Screenwriters’ Festival</span><br>"A PR agency with passion, excitement and commitment."',

//     '<span>Emma Wakefield, Managing Director, Lambent Productions</span><br>"Sophie and her team at tpr are extraordinary. Their insight, dedication, determination and sheer passion gave our film the boost we all felt it deserved and never thought we could achieve. It was an absolute joy working with them and the results speak for themselves."',

//     '<span>Elliot Grove, Director, Raindance Independent Film Festival</span><br>"The tpr team totally understood what we were trying to do, took our message and amplified it. We have never had so much useful coverage."',

//     '<span>Angus Macqueen, Director and Executive Producer, Ronachan Films</span><br>"tpr are the right place to go to make sure an audience knows about a film."',

//     '<span>Nick Broomfield, award-winning director</span><br>"I loved working with tpr and we achieved amazing publicity."',

//     '<span>Sue Summers, Finestripe Productions</span> <br>"We got the kind of coverage that factual producers would kill for."',

//     '<span>Jon Snow, anchor, Channel 4 News</span> <br>"tpr are brilliant, original and manage to obtain coverage and promotional opportunities in unexpected quarters."',

//     '<span>Jan Younghusband, Commissioning Editor, BBC Music & events</span> <br>"tpr are extremely dynamic and work sensitively with top artists. Brilliant coverage."',

//     '<span>Peter Kosminsky, award - winning director</span> <br>"tpr did a wonderful job on the publicity campaign for Britz – among the most comprehensive I have known. I can recommend them without reservation."',

//     '<span>Tim Albone, Co - director, Out of the Ashes</span> <br>"Wonderful people and wonderful PR.If you want huge coverage for your film you need tpr. It was, without a doubt, some of the most important money we spent on the film.They did an amazing job and are a complete joy to work with."',

//     '<span>Roger Graef, Roger Graef Productions</span> <br>"The best media relations I’ve had in years..."',

//     '<span>Eammon Matthews, Managing Director, Quicksilver Media</span> <br>"tpr’s press campaigns were instrumental in ensuring not just solid audience figures but also the commissioning of future series."',

//     '<span>Brian Hill, Managing Director, Century Films</span> <br>"tpr are the best people around at getting press coverage for productions."',

//     '<span>Fran Silman, Justice for Health</span> <br>"tpr media ensured we got our message out, in a way that we felt was truthful and honest.They helped us to work out how to explain what was a complex nuanced legal argument to the public, and we thank them for all their hard work and absolute commitment to the project."',

//     '<span>Andy Glynne, Managing Director, Mosaic Films</span> <br>"Passion, dedication and professionalism combined with excellent results, visibility and coverage.I wholeheartedly recommend tpr."',

//     '<span>David Brindley, Head of Popular Factual and Factual Entertainment, BBC</span> <br>"I’ve worked with Sophie on several big series. She and her team provide attention to detail and you feel your films are very carefully and looked after in her hands. I’m looking forward to continuing to work with tpr media on many future projects."'
// ];
// var counter = 0;
// var elem = document.querySelector(".testimonial");
// setInterval(change, 5000);

// function change() {
//     elem.classList.add("testimonial--hide");
//     console.log("testimonial--hide");
//     setTimeout(function () {
//         elem.innerHTML = text[counter];
//         elem.classList.remove("testimonial--hide");
//         console.log("show");
//         counter++;
//         if (counter >= text.length) {
//             counter = 0;
//         }
//     }, 750);
// }
/******************************* 
// TESTIMONIALS ENDS
********************************/