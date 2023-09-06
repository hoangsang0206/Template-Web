//Show overlay when click category button -------------------------------------------
const categoryBtn = document.querySelector(".categories-btn");
const overlay = document.querySelector(".overlay");
const hiddenMenu = document.querySelector(".hidden-menu");

categoryBtn.addEventListener("click", function() {
    overlay.classList.toggle("showOverlay");
    hiddenMenu.classList.toggle("showHiddenMenu");
    //document.body.classList.toggle("web-scroll-block");
});

overlay.addEventListener("click", function() {
    overlay.classList.toggle("showOverlay");
    hiddenMenu.classList.toggle("showHiddenMenu");
    //document.body.classList.toggle("web-scroll-block");
});

hiddenMenu.addEventListener("click", function() {
    overlay.classList.toggle("showOverlay");
    hiddenMenu.classList.toggle("showHiddenMenu");
    //document.body.classList.toggle("web-scroll-block");
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
                    slidesToShow: 3
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
                    slidesToShow: 3
                }
            }
        ]
    })
});
