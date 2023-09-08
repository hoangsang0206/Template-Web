//Show overlay when click category button -------------------------------------------
$(document).ready(function() {
    $(".categories-btn").click(() => {
        $(".hidden-menu").toggleClass("showHiddenMenu");
        $(".hidden-menu").click(() => {
            $(".hidden-menu").removeClass("showHiddenMenu");
            $(".overlay").removeClass("showOverlay");
        });
        $(".overlay").toggleClass("showOverlay");
        $(".overlay").click(() => {
            $(".hidden-menu").removeClass("showHiddenMenu");
        });
    });
    $(".overlay").click(() => {
        $(".overlay").removeClass("showOverlay");
    });
});

//Show scroll to top button ----------------------------------------------------------
const scrollTopBtn = document.querySelector(".to-top-btn");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.classList.add("showToTopBtn");
      } else {
        scrollTopBtn.classList.remove("showToTopBtn");
      }
}

scrollTopBtn.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

//Show sidebar menu ------------------------------------------------------------------------
$(document).ready(function() {
    $(".mobile-categories-btn").click(function() {
        $(".mobile-sidebar").addClass("showMobileSidebar");
        $(".overlay").addClass("showOverlay");
        $(".overlay").click(function() {
            $(".mobile-sidebar").removeClass("showMobileSidebar");
            $("body").removeClass("web-scroll-block");
        });
        $("body").addClass("web-scroll-block");
    });
});

//Slick Slider ------------------------------------------------------------------------
$(document).ready(function() {
    $(".sale-slick-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-chevron-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-chevron-right"></i></button>`,
        dots: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2.3,
                    arrows: false
                }
            }
        ]
    });
});

//Slick Slider for Collection in main page
$(document).ready(function() {
    $(".collection-slick-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-chevron-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-chevron-right"></i></button>`,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2.3,
                    arrows: false
                }
            }
        ]
    })
});