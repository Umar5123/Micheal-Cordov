// Responsive Navbar//
function myFunction() {
    let element = document.querySelector("nav");
    element.classList.toggle("nav-show");

    let element2 = document.querySelector(".toggle-btn");
    element2.classList.toggle("toggle-open");
}

document.querySelector(".toggle-btn").addEventListener("click", myFunction)
//--- Header ----//
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 50) {
            document.querySelector("header").classList.add("active");
        } else {
            document.querySelector("header").classList.remove("active");
        }
    });
});

//--- Banner Slider ---//

$('.banner-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1800,
});

//--- End Banner Slider ---//

//--- compass-slider ---//
$('.compass-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1800,
});
//--- End compass-slider ---//


//--- premises-premium ---//
$('.premises-premium').slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplaySpeed: 1800,
    default: false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: true,
                prevArrow: `<button type="button" class="next-slick"><i class="fa-solid fa-caret-left"></i></button>`,
                nextArrow: `<button type="button" class="prev-slick"><i class="fa-solid fa-caret-right"></i></button>`
            }
        }
    ]
});

//------ End premises-premium -------//


//------- micheal-cordova -------//
$('.micheal-cordova').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1800,
});
//---- End micheal-cordova -------//


if (screen.width < 767) {
    $('.praactice-area-content').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
}

